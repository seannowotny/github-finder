"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _GithubState = _interopRequireDefault(require("./context/github/GithubState"));

var _AlertState = _interopRequireDefault(require("./context/alert/AlertState"));

var _Navbar = _interopRequireDefault(require("./components/layout/Navbar"));

var _Alert = _interopRequireDefault(require("./components/layout/Alert"));

var _User = _interopRequireDefault(require("./components/users/User"));

var _Home = _interopRequireDefault(require("./components/pages/Home"));

var _NotFound = _interopRequireDefault(require("./components/pages/NotFound"));

var _About = _interopRequireDefault(require("./components/pages/About"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//#region Imports 
//#endregion 
var App = function App() {
  return _react.default.createElement(_GithubState.default, null, _react.default.createElement(_AlertState.default, null, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement(_Navbar.default, null), _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement(_Alert.default, null), _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _Home.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/about",
    component: _About.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/user/:login",
    component: _User.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: _NotFound.default
  })))))));
};

var _default = App;
exports.default = _default;