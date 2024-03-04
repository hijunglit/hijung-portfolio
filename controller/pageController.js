"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleProject = exports.handleHome = exports.handleContact = exports.handleAbout = void 0;
var handleHome = exports.handleHome = function handleHome(req, res) {
  var url = req.url;
  var isHome = url === "/";
  console.log(isHome);
  return res.render("home", {
    pageTitle: "hijung portfolio | Home",
    isHome: isHome
  });
};
var handleAbout = exports.handleAbout = function handleAbout(req, res) {
  return res.render("about", {
    pageTitle: "hijung portfolio | About"
  });
};
var handleProject = exports.handleProject = function handleProject(req, res) {
  return res.render("projects", {
    pageTitle: "hijung portfolio | Projects"
  });
};
var handleContact = exports.handleContact = function handleContact(req, res) {
  return res.render("contact", {
    pageTitle: "hijung portfolio | Contact"
  });
};