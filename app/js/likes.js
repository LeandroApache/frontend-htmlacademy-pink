var galleryLikeButtons = document.querySelectorAll(".gallery__like-button");
var galleryLikes = document.querySelectorAll(".gallery__like-value");

for (let [index, button] of galleryLikeButtons.entries()) {
  button.addEventListener("click", function () {
    button.classList.toggle("gallery__like-button--liked");
  })
}
