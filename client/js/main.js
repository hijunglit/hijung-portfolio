"use strict";

require("../scss/styles.scss");
console.log("document viewport width:", document.documentElement.clientWidth, "browser window width:", window.outerWidth);
console.log("document viewport height:", document.documentElement.clientHeight, "browser window height:", window.outerHeight);
var menuBtn = document.querySelector(".siteMenuBtn");
function introAnimation() {
  var intro = document.querySelector("#intro");
  if (intro) {
    var logo = intro.querySelector(".logo-header");
    var logoSpan = logo.querySelectorAll(".logo");
    document.body.setAttribute("style", "opacity:1");
    setTimeout(function () {
      logoSpan.forEach(function (span, idx) {
        setTimeout(function () {
          span.classList.add("fadeout");
        }, (idx + 1) * 400);
      });
    }, 1500);
    setTimeout(function () {
      intro.style.opacity = 0;
      setTimeout(function () {
        intro.remove();
      }, 500);
    }, 2000);
  } else {
    document.body.setAttribute("style", "opacity: 0;");
    setTimeout(function () {
      document.body.setAttribute("style", "opacity: 1; transition: 0.6s ease-in");
    }, 600);
  }
}
function handleMenu() {
  var isToggle = menuBtn.classList.toggle("open");
  var siteMenu = document.querySelector(".siteMenu");
  var menuHeight = siteMenu.offsetHeight;
  var page = document.querySelector(".page");
  if (isToggle) {
    siteMenu.setAttribute("style", "display:block; translate:none; rotate: none; scale: none; transform:translate(0px, 0px); opacity:1;");
    menuHeight = siteMenu.offsetHeight;
    page.setAttribute("style", "transform:translate(0px, ".concat(menuHeight, "px)"));
    menuBtn.innerText = "close";
  } else {
    siteMenu.setAttribute("style", "transition: 0.2s ease-in; translate: none; rotate: none; scale: none; transform:translate(0px, -20%); opacity: 0; display:none;");
    page.setAttribute("style", "transform:translate(0px, 0px)");
    menuBtn.innerText = "menu";
  }
}
window.addEventListener("DOMContentLoaded", introAnimation);
menuBtn.addEventListener("click", handleMenu);