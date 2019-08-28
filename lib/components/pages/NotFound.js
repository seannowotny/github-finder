"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react.default.createElement("div", null, _react.default.createElement("h1", null, "Not Found"), _react.default.createElement("p", {
    className: "lead"
  }, "The page you are looking for does not exist..."));
};

var _default = NotFound;
exports.default = _default;