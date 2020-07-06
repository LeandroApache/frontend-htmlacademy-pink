var fields = document.querySelectorAll(".form-section__input[js-required]");
var closeButtons = document.querySelectorAll(".submit-popup__submit-button");
var form = document.querySelector(".form-section__form")
var errorPopup = document.querySelector(".error-popup");
var successPopup = document.querySelector(".success-popup");
var modalOverlay = document.querySelector(".modal-overlay");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();

  for (var i = 0; i < fields.length; i++) {

    if (fields[i].value == "") {
      fields[i].focus();
      errorPopup.classList.add("modal-show");
      modalOverlay.classList.add("modal-show");

      break;
    }

    if (i + 1 == fields.length) {
      modalOverlay.classList.add("modal-show");
      successPopup.classList.add("modal-show");
    }
  }

})

closeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    successPopup.classList.remove("modal-show");
    errorPopup.classList.remove("modal-show");
    modalOverlay.classList.remove("modal-show");
  })
})
