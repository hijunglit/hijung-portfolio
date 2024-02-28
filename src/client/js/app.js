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
  const isToggle = menuBtn.classList.toggle("open");
  const siteMenu = document.querySelector(".siteMenu");
  let menuHeight = siteMenu.offsetHeight;
  const page = document.querySelector(".page");
  if (isToggle) {
    siteMenu.setAttribute(
      "style",
      "display:block; translate:none; rotate: none; scale: none; transform:translate(0px, 0px); opacity:1;"
    );
    menuHeight = siteMenu.offsetHeight;
    page.setAttribute("style", `transform:translate(0px, ${menuHeight}px)`);
    menuBtn.innerText = "close";
  } else {
    siteMenu.setAttribute(
      "style",
      "transition: 0.2s ease-in; translate: none; rotate: none; scale: none; transform:translate(0px, -20%); opacity: 0; display:none;"
    );
    page.setAttribute("style", "transform:translate(0px, 0px)");
    menuBtn.innerText = "menu";
  }
}

window.addEventListener("DOMContentLoaded", introAnimation);
menuBtn.addEventListener("click", handleMenu);
