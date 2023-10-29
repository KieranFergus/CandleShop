/* Candle Class */
function Product(name, cost, qty, description, image){
    this.name = name;
    this.cost = cost;
    this.quantity = qty;
    this.description = description;
    this.image = image;
}


catalog = new Array (
    new Product("Tranquil Twilight", 12, 0, "This candle offers a soothing blend of lavender and chamomile scents, perfect for winding down after a long day. Let its gentle fragrance envelop you in tranquility.", "images/cat1.jpg"),
    new Product("Citrus Serenity", 15, 0, "Enjoy the refreshing and invigorating aroma of zesty citrus fruits. This candle brings a burst of energy to any room, creating a sense of serenity and awakening your senses.", "images/cat2.jpg"),
    new Product("Enchanted Embers", 10, 0, "Enchanted Embers evokes the cozy ambiance of a crackling fireplace. Its warm and woody notes create a magical atmosphere, perfect for a relaxing evening.", "images/cat3.jpg"),
    new Product("Midnight Jasmine", 14, 0, "The fragrance of midnight jasmine fills the air with floral elegance and a touch of mystery. Light this candle to set a romantic and enchanting mood.", "images/cat4.jpg"),
    new Product("Cozy Cabin Glow", 12, 0, "Imagine the warmth of a cozy cabin in the woods. This candle combines rustic woodsy scents with a hint of spiced vanilla, providing a comforting and inviting atmosphere.", "images/cat5.jpg"),
    new Product("Ocean Breeze Bliss", 15, 0, "Bring the soothing scent of the ocean into your home. Ocean Breeze Bliss offers a fresh and revitalizing fragrance, reminiscent of a day at the beach.", "images/cat6.jpg"),
    new Product("Vanilla Velvet Dream", 14, 0, "Dive into a dreamy world of creamy vanilla. This candle envelops you in a warm and comforting embrace, like a velvety dessert for the senses.", "images/cat7.jpg"),
    new Product("Fireside Harmony", 10, 0, "Fireside Harmony captures the essence of a crackling campfire. Its smoky and earthy scents create a harmonious ambiance that brings people together.", "images/cat8.jpg"),
    new Product("Lavender Lullaby", 12, 0, "Lavender Lullaby is the perfect candle to help you relax and unwind. With its calming lavender scent, it lulls you into a peaceful and restful sleep.", "images/cat9.jpg")
);


function createCatalog(){
    let container = $("#catalog");

    for (i = 0; i < 9; i++) {
        var item = $("<li>").text(catalog[i].name);
        var item_img = document.createElement("img");
        item_img.src = catalog[i].image;
        console.log(item_img.src)
        item.addClass("product")

        item.append(item_img)
        container.append(item)
    }
}


var cart = [];

$(document).ready(function(){

    createCatalog();
    $(".cart-count").html(cart.length)

    var currProduct;
    var quantityInput = $('.quantity-input');
    var currentQty = 0;
    
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

    // adding products from catalog to cart
    $(".subtract").on("click", function() {
        currentQty = parseInt(quantityInput.val())
        if (currentQty > 0) {
            currentQty =currentQty - 1;

            quantityInput.val(currentQty);
        }
        
    })
    
    $(".add").on("click", function() {
        currentQty = parseInt(quantityInput.val());
        currentQty =currentQty + 1;
        quantityInput.val(currentQty);
        
    })
    
    $("#add_to_cart").on("click", function(){
        currProduct.quantity = parseInt(quantityInput.val());
        console.log(currentQty)
        
        if (currProduct.quantity > 0) {
            console.log("length is before: " + cart.length)
            console.log("index of item: " + cart.indexOf(currProduct))
            let cartIndex = cart.indexOf(currProduct);
            if (cartIndex === -1) {
                cart.push(currProduct);
                storeCart();
            } else {
                cart[cartIndex] = currProduct
                storeCart();
            }
            console.log("length is after: " + cart.length)
            // console.log(cart[cartIndex])

            $(".cart-count").html(cart.length)
            // storeCart();
            cart.forEach((item) =>{
                console.log(item)
            })
            
        }

        
    })

})

//Storing cart in local memory  
function storeCart(){
    localStorage.setItem("cart", JSON.stringify(cart));

}