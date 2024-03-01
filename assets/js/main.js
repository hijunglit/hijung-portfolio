/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/main.js":
/*!*******************************!*\
  !*** ./src/client/js/main.js ***!
  \*******************************/
/***/ (() => {

eval("console.log(\"document viewport width:\", document.documentElement.clientWidth, \"browser window width:\", window.outerWidth);\nconsole.log(\"document viewport height:\", document.documentElement.clientHeight, \"browser window height:\", window.outerHeight);\nconst menuBtn = document.querySelector(\".siteMenuBtn\");\nfunction introAnimation() {\n  let intro = document.querySelector(\"#intro\");\n  if (intro) {\n    let logo = intro.querySelector(\".logo-header\");\n    let logoSpan = logo.querySelectorAll(\".logo\");\n    document.body.setAttribute(\"style\", \"opacity:1\");\n    setTimeout(() => {\n      logoSpan.forEach((span, idx) => {\n        setTimeout(() => {\n          span.classList.add(\"fadeout\");\n        }, (idx + 1) * 400);\n      });\n    }, 1500);\n    setTimeout(() => {\n      intro.style.opacity = 0;\n      setTimeout(() => {\n        intro.remove();\n      }, 500);\n    }, 2000);\n  } else {\n    document.body.setAttribute(\"style\", \"opacity: 0;\");\n    setTimeout(() => {\n      document.body.setAttribute(\"style\", \"opacity: 1; transition: 0.6s ease-in\");\n    }, 600);\n  }\n}\nfunction handleMenu() {\n  const isToggle = menuBtn.classList.toggle(\"open\");\n  const siteMenu = document.querySelector(\".siteMenu\");\n  let menuHeight = siteMenu.offsetHeight;\n  const page = document.querySelector(\".page\");\n  if (isToggle) {\n    siteMenu.setAttribute(\"style\", \"display:block; translate:none; rotate: none; scale: none; transform:translate(0px, 0px); opacity:1;\");\n    menuHeight = siteMenu.offsetHeight;\n    page.setAttribute(\"style\", `transform:translate(0px, ${menuHeight}px)`);\n    menuBtn.innerText = \"close\";\n  } else {\n    siteMenu.setAttribute(\"style\", \"transition: 0.2s ease-in; translate: none; rotate: none; scale: none; transform:translate(0px, -20%); opacity: 0; display:none;\");\n    page.setAttribute(\"style\", \"transform:translate(0px, 0px)\");\n    menuBtn.innerText = \"menu\";\n  }\n}\nwindow.addEventListener(\"DOMContentLoaded\", introAnimation);\nmenuBtn.addEventListener(\"click\", handleMenu);\n\n//# sourceURL=webpack://hijung-portfolio/./src/client/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/main.js"]();
/******/ 	
/******/ })()
;