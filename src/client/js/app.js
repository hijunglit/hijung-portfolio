let intro = document.querySelector("#intro");
let logo = intro.querySelector(".logo-header");
let logoSpan = logo.querySelectorAll(".logo");

function introAnimation() {
  setTimeout(() => {
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("fadeout");
        }, (idx + 1) * 200);
      });
    }, 1500);
    setTimeout(() => {
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.remove();
      }, 500);
    }, 2000);
  });
}
window.addEventListener("DOMContentLoaded", introAnimation);
