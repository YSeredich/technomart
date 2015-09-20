var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
        }
    }
});

var writeOpen = document.querySelector(".open-writeus");
var writePopup = document.querySelector(".modal-content-write-us");
var writeClose = writePopup.querySelector(".modal-content-close");

writeOpen.addEventListener("click", function(event) {
    event.preventDefault();
    writePopup.classList.add("modal-content-show");
});

writeClose.addEventListener("click", function(event) {
    event.preventDefault();
    writePopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (writePopup.classList.contains("modal-content-show")) {
            writePopup.classList.remove("modal-content-show");
        }
    }
});

var cartOpen = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".modal-content-cart-plus");
var cartClose = cartPopup.querySelector(".modal-content-close");

cartOpen.addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.classList.add("modal-content-show");
});

cartClose.addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (cartPopup.classList.contains("modal-content-show")) {
            cartPopup.classList.remove("modal-content-show");
        }
    }
});