console.log(
  "document viewport width:",
  document.documentElement.clientWidth,
  "browser window width:",
  window.outerWidth
);
console.log(
  "document viewport height:",
  document.documentElement.clientHeight,
  "browser window height:",
  window.outerHeight
);

const menuBtn = document.querySelector(".siteMenuBtn");

function introAnimation() {
  let intro = document.querySelector("#intro");
  if (intro) {
    let logo = intro.querySelector(".logo-header");
    let logoSpan = logo.querySelectorAll(".logo");
    document.body.setAttribute("style", "opacity:1");

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("fadeout");
        }, (idx + 1) * 400);
      });
    }, 1500);

    setTimeout(() => {
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.remove();
      }, 500);
    }, 2000);
  } else {
    document.body.setAttribute("style", "opacity: 0;");
    setTimeout(() => {
      document.body.setAttribute(
        "style",
        "opacity: 1; transition: 0.6s ease-in"
      );
    }, 600);
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
