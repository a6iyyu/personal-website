document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("change", function () {
    if (this.checked) {
      overlay.style.display = "grid";
      overlay.style.placeItems = "center";
      document.body.style.overflow = "hidden";
    } else {
      overlay.style.animation = "slide-out 0.5s forwards";
      document.body.style.overflow = "auto";
      setTimeout(() => {
        overlay.style.display = "none";
        overlay.style.animation = "";
      }, 500);
    }
  });
});