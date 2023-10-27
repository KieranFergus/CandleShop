/* Candle Class */
function product(name, cost, qty){
    this.name = name;
    this.cost = cost;
    this.quantity = qty;
}

catalog = new Array (
    new product("Tranquil Twilight", 12, 0),
    new product("Citrus Serenity", 15, 0),
    new product("Enchanted Embers", 10, 0),
    new product("Midnight Jasmine", 14, 0),
    new product("Cozy Cabin Glow", 12, 0),
    new product("Ocean Breeze Bliss", 15, 0),
    new product("Vanilla Velvet Dream", 14, 0),
    new product("Fireside Harmony", 10, 0),
    new product("Lavender Lullaby", 12, 0)
);

function createCatalog(){
    var container = $("#catalog");

    for (i = 0; i < 9; i++) {
        var item = $("<li>").text(catalog[i].name);
        item.addClass("product")
        container.append(item)
    }
}


$(document).ready(function(){
    createCatalog();
    
    var currProduct;
    var quantityInput = $('.quantity-input');
    
    
    // Opens and Closes the Modal
    $("main ul li").on('click', function(){
        console.log("works")
        $("#modal").addClass("open");
        $(".quantity-input").val(0);

        currProduct = catalog.find(product => product.name === $(this).text());
        $(".modal-inner h2").text(currProduct.name);
        
    })

    $("#closeModal").on("click", function(){
        $("#modal").removeClass("open");
    })



    // adding products from catalog to cart
    $(".subtract").on("click", function() {
        const currentQty = parseInt(quantityInput.val())
        if (currentQty > 0) {
            quantityInput.val(currentQty - 1);
        }
        
    })
    
    $(".add").on("click", function() {
        const currentQty = parseInt(quantityInput.val())
        quantityInput.val(currentQty + 1);
        
    })
    
    $("#add_to_cart").on("click", function(){
        currProduct.quantity = parseInt(quantityInput.val());
        console.log(currProduct)
    })


})
