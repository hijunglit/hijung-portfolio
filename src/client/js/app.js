console.log("document viewport", document.documentElement.clientHeight);
console.log("browser window height", window.outerHeight);

const menuBtn = document.querySelector(".siteMenuBtn");

function introAnimation() {
  let intro = document.querySelector("#intro");
  if (intro) {
    let logo = intro.querySelector(".logo-header");
    let logoSpan = logo.querySelectorAll(".logo");
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
}

function handleMenu() {
  const menuHeight = document.querySelector(".siteMenu");
  const page = document.querySelector(".page");
}

window.addEventListener("DOMContentLoaded", introAnimation);
menuBtn.addEventListener("click", handleMenu);
