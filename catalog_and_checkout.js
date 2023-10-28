/* Candle Class */
function product(name, cost, qty, description){
    this.name = name;
    this.cost = cost;
    this.quantity = qty;
    this.description = description;
}

catalog = new Array (
    new product("Tranquil Twilight", 12, 0, "This candle offers a soothing blend of lavender and chamomile scents, perfect for winding down after a long day. Let its gentle fragrance envelop you in tranquility."),
    new product("Citrus Serenity", 15, 0, "Enjoy the refreshing and invigorating aroma of zesty citrus fruits. This candle brings a burst of energy to any room, creating a sense of serenity and awakening your senses."),
    new product("Enchanted Embers", 10, 0, "Enchanted Embers evokes the cozy ambiance of a crackling fireplace. Its warm and woody notes create a magical atmosphere, perfect for a relaxing evening."),
    new product("Midnight Jasmine", 14, 0, "The fragrance of midnight jasmine fills the air with floral elegance and a touch of mystery. Light this candle to set a romantic and enchanting mood."),
    new product("Cozy Cabin Glow", 12, 0, "Imagine the warmth of a cozy cabin in the woods. This candle combines rustic woodsy scents with a hint of spiced vanilla, providing a comforting and inviting atmosphere."),
    new product("Ocean Breeze Bliss", 15, 0, "Bring the soothing scent of the ocean into your home. Ocean Breeze Bliss offers a fresh and revitalizing fragrance, reminiscent of a day at the beach."),
    new product("Vanilla Velvet Dream", 14, 0, "Dive into a dreamy world of creamy vanilla. This candle envelops you in a warm and comforting embrace, like a velvety dessert for the senses."),
    new product("Fireside Harmony", 10, 0, "Fireside Harmony captures the essence of a crackling campfire. Its smoky and earthy scents create a harmonious ambiance that brings people together."),
    new product("Lavender Lullaby", 12, 0, "Lavender Lullaby is the perfect candle to help you relax and unwind. With its calming lavender scent, it lulls you into a peaceful and restful sleep.")
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
        $(".modal-inner p").text(currProduct.description)
        
    })

    $("#closeModal").on("click", function(){
        $("#modal").removeClass("open");
    })

    // $(".modal").on("click", function(){
    //     $("#modal").removeClass("open");

    // })



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
