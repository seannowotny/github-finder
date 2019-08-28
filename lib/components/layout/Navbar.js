"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var icon = _ref.icon,
      title = _ref.title;
  return _react.default.createElement("nav", {
    className: "navbar bg-primary"
  }, _react.default.createElement("h1", null, _react.default.createElement("i", {
    className: icon
  }), " ", title), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Home")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
    to: "/about"
  }, "About"))));
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};
var _default = Navbar;
exports.default = _default;