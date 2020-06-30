var priceSection = document.querySelector(".price");

var priceRadioButtons = document.querySelectorAll(".slider__input-radio[type='radio'][name='price']");

var priceVaries = ["price--left", "price--center", "price--right"];
var activeVariety = "price--center";

console.log(priceSection, priceRadioButtons, priceVaries, activeVariety);

for (var i = 0; i < priceRadioButtons.length; i ++) {
  priceRadioButtons[i].addEventListener("click", function() {
    priceSection.classList.remove(activeVariety);
    activeVariety = priceVaries[this.value - 1]
    priceSection.classList.add(activeVariety);
  })
}
