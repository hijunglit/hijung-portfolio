"use strict";

var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _globalRouter = _interopRequireDefault(require("./router/globalRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log("dir name is ", __dirname);
var PORT = 8080;
var cwd = process.cwd();
var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.set("views", cwd + "/src/views");
app.set("view engine", "pug");
app.use("/static", _express["default"]["static"]("assets"));
app.use("/images", _express["default"]["static"](cwd + "/src/images"));
app.use("/", _globalRouter["default"]);
var handleListen = function handleListen() {
  return console.log("\u2705 Server is listening on port http://localhost:".concat(PORT, " \uD83D\uDE80"));
};
app.listen(PORT, handleListen);

/*************************** Reference ***************************/
// https://www.codewonders.dev/
// https://github.com/adenekan41/codewonders