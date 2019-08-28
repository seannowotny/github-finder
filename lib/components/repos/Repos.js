"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RepoItem = _interopRequireDefault(require("./RepoItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Repos = function Repos(_ref) {
  var repos = _ref.repos;
  return repos.map(function (repo) {
    return _react.default.createElement(_RepoItem.default, {
      repo: repo,
      key: repo.id
    });
  });
};

var _default = Repos;
exports.default = _default;