var radioButtons = document.querySelectorAll(".slider__input-radio[name='review']");
var slides = document.querySelectorAll(".reviews .slider__element");
var buttonNext = document.querySelector(".reviews__button-next");
var buttonPrev = document.querySelector(".reviews__button-previous");

var activeSlide = 0;

buttonNext.addEventListener("click", function() {
  activeSlide += 1;
  if (activeSlide >= slides.length) {
    slides[activeSlide - 1].classList.remove("slider__element--active", "fadeIn");
    activeSlide = 0;
    slides[activeSlide].classList.add("slider__element--active", "fadeIn");
  } else {
    slides[activeSlide - 1].classList.remove("slider__element--active", "fadeIn");
    slides[activeSlide].classList.add("slider__element--active", "fadeIn");
  }
})

buttonPrev.addEventListener("click", function() {
  activeSlide -= 1;
  if (activeSlide < 0) {
    slides[activeSlide + 1].classList.remove("slider__element--active", "fadeIn");
    activeSlide = 2;
    slides[activeSlide].classList.add("slider__element--active", "fadeIn");
  } else {
    slides[activeSlide + 1].classList.remove("slider__element--active", "fadeIn");
    slides[activeSlide].classList.add("slider__element--active", "fadeIn");
  }
})


for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", function(evt) {
    if ((this.value - 1) == activeSlide) {
      //pass
    } else {
      slides[activeSlide].classList.remove("slider__element--active", "fadeIn");
      activeSlide = this.value - 1;
      slides[activeSlide].classList.add("slider__element--active", "fadeIn");
    }

  })
}
