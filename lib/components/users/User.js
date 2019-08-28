"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Spinner = _interopRequireDefault(require("../layout/Spinner"));

var _Repos = _interopRequireDefault(require("../repos/Repos"));

var _githubContext = _interopRequireDefault(require("../../context/github/githubContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//#endregion
var User = function User(_ref) {
  var match = _ref.match;

  var _useContext = (0, _react.useContext)(_githubContext.default),
      getUser = _useContext.getUser,
      isLoading = _useContext.isLoading,
      user = _useContext.user,
      repos = _useContext.repos,
      getUserRepos = _useContext.getUserRepos;

  (0, _react.useEffect)(function () {
    if (match) getUser(match.params.login);
    getUserRepos(match.params.login); // eslint-disable-next-line
  }, []);
  var name = user.name,
      avatar_url = user.avatar_url,
      location = user.location,
      bio = user.bio,
      blog = user.blog,
      login = user.login,
      html_url = user.html_url,
      followers = user.followers,
      following = user.following,
      public_repos = user.public_repos,
      public_gists = user.public_gists,
      hirable = user.hirable,
      company = user.company;
  if (isLoading) return _react.default.createElement(_Spinner.default, null);
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "btn btn-light"
  }, "Back to Search"), "hirable: ", ' ', hirable ? _react.default.createElement("i", {
    className: "fas fa-check text-success"
  }) : _react.default.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }), _react.default.createElement("div", {
    className: "card grid-2"
  }, _react.default.createElement("div", {
    className: "all-center"
  }, _react.default.createElement("img", {
    src: avatar_url,
    className: "round-img",
    alt: "",
    style: {
      width: '150px'
    }
  }), _react.default.createElement("h1", null, name), _react.default.createElement("p", null, "Location: ", location)), _react.default.createElement("div", null, bio && _react.default.createElement(_react.Fragment, null, _react.default.createElement("h3", null, "Bio"), _react.default.createElement("p", null, bio)), _react.default.createElement("a", {
    href: html_url,
    className: "btn btn-dark my-1"
  }, "Visit Github Profile"), _react.default.createElement("ul", null, _react.default.createElement("li", null, login && _react.default.createElement(_react.Fragment, null, _react.default.createElement("strong", null, "Username: "), " ", login)), _react.default.createElement("li", null, company && _react.default.createElement(_react.Fragment, null, _react.default.createElement("strong", null, "Company: "), " ", company)), _react.default.createElement("li", null, blog && _react.default.createElement(_react.Fragment, null, _react.default.createElement("strong", null, "Website: "), " ", blog))))), _react.default.createElement("div", {
    className: "card text-center"
  }, _react.default.createElement("div", {
    className: "badge badge-primary"
  }, "Followers: ", followers), _react.default.createElement("div", {
    className: "badge badge-success"
  }, "Following: ", following), _react.default.createElement("div", {
    className: "badge badge-light"
  }, "Public Repos: ", public_repos), _react.default.createElement("div", {
    className: "badge badge-dark"
  }, "Public Gists: ", public_gists)), _react.default.createElement(_Repos.default, {
    repos: repos
  }));
};

var _default = User;
exports.default = _default;