"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RepoItem = function RepoItem(_ref) {
  var repo = _ref.repo;
  return _react.default.createElement("div", {
    className: "card"
  }, _react.default.createElement("h3", null, _react.default.createElement("a", {
    href: repo.html_url
  }, repo.name)));
};

var _default = RepoItem;
exports.default = _default;