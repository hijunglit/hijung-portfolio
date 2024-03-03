"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _pageController = require("../controller/pageController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var globalRouter = _express["default"].Router();
globalRouter.get("/", _pageController.handleHome);
globalRouter.get("/about", _pageController.handleAbout);
globalRouter.get("/projects", _pageController.handleProject);
globalRouter.get("/contact", _pageController.handleContact);
var _default = exports["default"] = globalRouter;