
document.querySelector(".popup__close").addEventListener("click", function () {
  this.closest(".popup").style.display = "none";
});
