/* Candle Class */
function Product(name, cost, qty, description){
    this.name = name;
    this.cost = cost;
    this.quantity = qty;
    this.description = description;
}


var cart = [];

//Loading the cart from catalog
$(window).on("load", function() {
    cart = JSON.parse(localStorage.getItem("cart"));
    
    $(".cart-count").html(cart.length);
    

})

function togglePopup(x){
    document.getElementById(x).classList.toggle("active");
}

var subAll = document.getElementById('finalize');

$(document).ready(function() {
    subAll.addEventListener('click', () => {
      let materials = document.querySelectorAll('input[type="checkbox"]:checked');
      if(materials.length == 0){
        $('#finalize').hide();
        $('#finalize').fadeIn(500);
      }      

        cart.push(createProduct(materials))

        localStorage.setItem("cart", JSON.stringify(cart));

        $(".cart-count").html(cart.length);


    })
})

function createProduct(materials){
    let waxes = $(".waxIngredients")
    let cost = 0;

    //parsing through cost of materials
    for (i = 0; i < waxes.length; i++) {
        materials.forEach((item) => {
            if (waxes[i].value === item.value) {
                let label = $(waxes[i]).next();
                cost += parseInt(label.text().charAt(label.text().length - 1));
            }
        })
    }

    let oils = $(".oilIngredients")
    for (i = 0; i < oils.length; i++) {
        materials.forEach((item) => {
            if (oils[i].value === item.value) {
                let label = $(oils[i]).next();
                cost += parseInt(label.text().charAt(label.text().length - 1));
            }
        })
    }

    let wicks = $(".wickIngredients")
    for (i = 0; i < wicks.length; i++) {
        materials.forEach((item) => {
            if (wicks[i].value === item.value) {
                let label = $(wicks[i]).next();
                cost += parseInt(label.text().charAt(label.text().length - 1));
            }
        })
    }

    //creating custom candle description
    let description = "A custom blend of ";
    for (i = 0; i < materials.length - 1; i++) {

        if (materials.length == 2) {
            description += materials[i].value + " ";

        } else {

            description += materials[i].value + ", "
        }
    }

    description += "and " + materials[materials.length - 1].value

    return new Product("Custom Candle", cost, 1, description)

}

