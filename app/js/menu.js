var menu = document.querySelector(".site-navigation--no-js");
var open_button = document.querySelector(".button-open");
var close_button = document.querySelector(".button-close");


menu.classList.remove("site-navigation--no-js");


open_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.add("site-navigation--active-menu");
})

close_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.remove("site-navigation--active-menu");
})
