// LIGHTBOX

$(document).ready(function () {
    // Klik op de afbeelding om de lightbox te openen
    $(".img-big").click(function () {
        // De lightbox openen
        $(".lightbox").fadeIn();
    });

    // Klik buiten de lightbox om deze te sluiten
    $(".lightbox").click(function (e) {
        if ($(e.target).hasClass("lightbox")) {
            // De lightbox sluiten
            $(".lightbox").fadeOut();
        }
    });
    // Klik op de thumbnail om de afbeelding te wijzigen
    $(".img-thumb").click(function () {
        let thumbnailId = $(this).attr("id");
        chooseImage(thumbnailId);
    });


    $(".img-thumb-lightbox").click(function () {
        let thumbnailId = $(this).attr("id");
        chooseImageLightbox(thumbnailId)
    });

    $(".left-button").click(function () {
        navigateLightbox("decrease")

    })

    $(".right-button").click(function () {
        navigateLightbox("increase")

    })
    $(".left-button.button-xs").click(function () {
        navigateSmallScreen("decrease")

    })

    $(".right-button.button-xs").click(function () {
        navigateSmallScreen("increase")

    })
});


let addToCartAmount = 0;

function increaseAmount() {
    addToCartAmount++;
    updateDisplay()
}

function decreaseAmount() {
    if (addToCartAmount > 0) {
        addToCartAmount--;
    }
    updateDisplay()
}

function updateDisplay() {
    const displayElement = document.getElementById("amountToCart");
    displayElement.innerText = addToCartAmount;

}

function addToCart() {
    const cartElement = document.getElementById("cart-amount");
    const totalPriceElement = document.getElementById("price-total");
    const emptyCart = document.getElementById("cartWithoutProducts");
    const fullCart = document.getElementById("cartWithProducts");
    if (addToCartAmount > 0) {
        cartElement.style.visibility = "visible"
        cartElement.innerText = addToCartAmount

        emptyCart.style.visibility = "hidden";
        fullCart.style.visibility = "inherit";

        var unitPrice = 125.00;
        var totalPrice = unitPrice * addToCartAmount;
        totalPriceElement.innerHTML = `$${unitPrice.toFixed(2)} x ${addToCartAmount} <strong>$${totalPrice.toFixed(2)}</strong>`;
        totalPriceElement.style.display = "inline";
    } else {
        cartElement.style.visibility = "hidden"
        emptyCart.style.visibility = "inherit";
        fullCart.style.visibility = "hidden";
    }

}

// foto's 
let selectedPhoto = 0;
let photos = ["/images/image-product-1.jpg", "/images/image-product-2.jpg", "/images/image-product-3.jpg", "/images/image-product-4.jpg"]
document.getElementById("0").style.borderColor = 'hsl(26, 100%, 55%)';
//document.getElementById("0").style.opacity = '30%';
let myImage = document.getElementById("myImage");


// Create a white filter element
let filterElement = document.createElement("div");
filterElement.classList.add("image-filter");
myImage.parentElement.appendChild(filterElement);



function chooseImage(number) {

    let selectedImage = document.getElementById(number)
    for (let i = 0; i < photos.length; i++) {
        document.getElementById(i).style.borderColor = 'transparent'
        document.getElementById(i).style.opacity = '100%'
    }

    selectedPhoto = parseInt(number)
    myImage.setAttribute("src", photos[selectedPhoto]);
    document.getElementById(number).style.borderColor = 'hsl(26, 100%, 55%)';
    document.getElementById(number).style.opacity = '100%';

    // Position the filter over the image
    filterElement.style.width = selectedImage.clientWidth + "px";
    filterElement.style.height = selectedImage.clientHeight + "px";
    filterElement.style.top = selectedImage.offsetTop + 2 + "px";
    filterElement.style.left = selectedImage.offsetLeft + 2 + "px";
}

let myImageLightbox = document.getElementById("myImageLightbox");

// Create a white filter element
let filterElementLightbox = document.createElement("div");
filterElementLightbox.classList.add("image-filter-lightbox");
myImageLightbox.parentElement.appendChild(filterElementLightbox);

function chooseImageLightbox(number) {

    let selectedImage = document.getElementById(number)
    for (let i = 4; i < photos.length + 4; i++) {
        document.getElementById(i).style.borderColor = 'transparent'
        document.getElementById(i).style.opacity = '100%'
    }

    selectedPhoto = parseInt(number - 4)
    myImageLightbox.setAttribute("src", photos[selectedPhoto]);
    selectedImage.style.borderColor = 'hsl(26, 100%, 55%)';

    // Position the filter over the image
    filterElementLightbox.style.width = selectedImage.clientWidth + "px";
    filterElementLightbox.style.height = selectedImage.clientHeight + "px";
    filterElementLightbox.style.top = selectedImage.offsetTop + 2 + "px";
    filterElementLightbox.style.left = selectedImage.offsetLeft + 2 + "px";
}

function navigateLightbox(direction) {
    let number = selectedPhoto + 4

    if (direction === "increase") {
        if (number < 7) {
            number++
        } else {
            number = 4
        }
    } else {
        if (number > 4) {
            number--
        } else {
            number = 7
        }

    }
    chooseImageLightbox(number)

}

function navigateSmallScreen(direction) {
    let number = selectedPhoto

    if (direction === "increase") {
        if (number < 3) {
            number++
        } else {
            number = 0
        }
    } else {
        if (number > 0) {
            number--
        } else {
            number = 3
        }

    }
    chooseImage(number)

}









