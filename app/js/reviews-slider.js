var reviewsRadioButtons = document.querySelectorAll(".slider__input-radio[name='review']");
var reviewsSlides = document.querySelectorAll(".reviews .slider__element");
var reviewsButtonNext = document.querySelector(".reviews__button-next");
var reviewsButtonPrev = document.querySelector(".reviews__button-previous");

var reviewsActiveSlide = 0;

reviewsButtonNext.addEventListener("click", function() {
  reviewsActiveSlide += 1;
  if (reviewsActiveSlide >= reviewsSlides.length) {
    reviewsSlides[reviewsActiveSlide - 1].classList.remove("slider__element--active", "fadeIn");
    reviewsActiveSlide = 0;
    reviewsSlides[reviewsActiveSlide].classList.add("slider__element--active", "fadeIn");
  } else {
    reviewsSlides[reviewsActiveSlide - 1].classList.remove("slider__element--active", "fadeIn");
    reviewsSlides[reviewsActiveSlide].classList.add("slider__element--active", "fadeIn");
  }
})

reviewsButtonPrev.addEventListener("click", function() {
  reviewsActiveSlide -= 1;
  if (reviewsActiveSlide < 0) {
    reviewsSlides[reviewsActiveSlide + 1].classList.remove("slider__element--active", "fadeIn");
    reviewsActiveSlide = 2;
    reviewsSlides[reviewsActiveSlide].classList.add("slider__element--active", "fadeIn");
  } else {
    reviewsSlides[reviewsActiveSlide + 1].classList.remove("slider__element--active", "fadeIn");
    reviewsSlides[reviewsActiveSlide].classList.add("slider__element--active", "fadeIn");
  }
})


for (var i = 0; i < reviewsRadioButtons.length; i++) {
  reviewsRadioButtons[i].addEventListener("click", function(evt) {
    if ((this.value - 1) == reviewsActiveSlide) {
      //pass
    } else {
      reviewsSlides[reviewsActiveSlide].classList.remove("slider__element--active", "fadeIn");
      reviewsActiveSlide = this.value - 1;
      reviewsSlides[reviewsActiveSlide].classList.add("slider__element--active", "fadeIn");
    }

  })
}
