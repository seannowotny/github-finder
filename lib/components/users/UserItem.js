"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserItem = function UserItem(_ref) {
  var user = _ref.user;

  if (user) {
    var login = user.login,
        avatar_url = user.avatar_url;
    return _react.default.createElement("div", {
      className: "card text-center"
    }, _react.default.createElement("img", {
      src: avatar_url,
      alt: "",
      className: "round-img",
      style: {
        width: '60px'
      }
    }), _react.default.createElement("h3", null, login), _react.default.createElement("div", null, _react.default.createElement(_reactRouterDom.Link, {
      to: "/user/".concat(login),
      className: "btn btn-dar btn-sm my-1"
    }, "More")));
  } else {
    return null;
  }
};

var _default = UserItem;
exports.default = _default;