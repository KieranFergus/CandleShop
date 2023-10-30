/* Candle Class */
function Product(name, cost, qty, description, image){
    this.name = name;
    this.cost = cost;
    this.quantity = qty;
    this.description = description;
    this.image = image;
}


var cart = [];

//Loading the cart from catalog
$(window).on("load", function() {
    cart = JSON.parse(localStorage.getItem("cart"));
    
    $(".cart-count").html(cart.length);
    
    if (cart.length != 0) {
        createCheckout();
    }
})

$(document).ready(function() {
    
})

function createCheckout(){
    let container = $("#checkout")
    cart.forEach((item) => {
        console.log(item)
        let product = $("<li>");
        let image = $("<div>");
        let info = $("<div>");
        let title = $("<h2>").text(item.name);
        let pricing = $("<ul>");


        product.addClass("product");
        image.addClass("image");
        info.addClass("info");
        title.addClass("title");
        pricing.addClass("pricing")

        image.css("background-image", `url('${item.image}')`);
        image.css("background-size", "cover");
        image.css("background-position", "center");

        let cost = $("<li>").html("Cost: <br>$" + item.cost);
        cost.addClass(".pricing li");
        pricing.append(cost);

        let quantity = $("<li>").html("Quantity: <br>" + item.quantity);
        quantity.addClass(".pricing li");
        pricing.append(quantity);

        let total = $("<li>").html("Total: <br>$" + parseInt(item.cost * item.quantity));
        cost.addClass(".pricing li");
        pricing.append(total);
        

        info.append(title);
        info.append(pricing);
        product.append(image);
        product.append(info);
        container.append(product);
    })
}
