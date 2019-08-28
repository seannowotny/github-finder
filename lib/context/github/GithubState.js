"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _githubContext = _interopRequireDefault(require("./githubContext"));

var _githubReducer = _interopRequireDefault(require("./githubReducer"));

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//#endregion
var githubClientID;
var githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientID = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

var GithubState = function GithubState(props) {
  var initialState = {
    user: {},
    users: [],
    repos: [],
    isLoading: false
  };

  var _useReducer = (0, _react.useReducer)(_githubReducer.default, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    // This isn't clean code! Fix later!
    getUsers(); // eslint-disable-next-line
  }, []); //Get Users

  var getUsers =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var url, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading();
              url = "https://api.github.com/users?client_id=".concat(String(githubClientID), "&client_secret=").concat(String(githubClientSecret));
              _context.next = 4;
              return _axios.default.get(url);

            case 4:
              res = _context.sent;
              dispatch({
                type: _types.GET_USERS,
                payload: res.data
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getUsers() {
      return _ref.apply(this, arguments);
    };
  }(); // Search Users


  var searchUsers =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(text) {
      var url, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsLoading();
              url = "https://api.github.com/search/users?q=".concat(text, "&client_id=").concat(String(githubClientID), "&client_secret=").concat(String(githubClientSecret));
              _context2.next = 4;
              return _axios.default.get(url);

            case 4:
              res = _context2.sent;
              dispatch({
                type: _types.SEARCH_USERS,
                payload: res.data.items
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function searchUsers(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // Get User


  var getUser =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(username) {
      var url, res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setIsLoading();
              url = "https://api.github.com/users/".concat(username, "?client_id=").concat(String(githubClientID), "&client_secret=").concat(String(githubClientSecret));
              _context3.next = 4;
              return _axios.default.get(url);

            case 4:
              res = _context3.sent;
              dispatch({
                type: _types.GET_USER,
                payload: res.data
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getUser(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // Get Repos


  var getUserRepos =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(username) {
      var url, res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setIsLoading();
              url = "https://api.github.com/users/".concat(username, "/repos?per_page=5&sort=created:asc&client_id=").concat(String(githubClientID), "&client_secret=").concat(String(githubClientSecret));
              _context4.next = 4;
              return _axios.default.get(url);

            case 4:
              res = _context4.sent;
              dispatch({
                type: _types.GET_REPOS,
                payload: res.data
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getUserRepos(_x3) {
      return _ref4.apply(this, arguments);
    };
  }(); // Clear Users


  var clearUsers = function clearUsers() {
    return dispatch({
      type: _types.CLEAR_USERS
    });
  }; // Set Loading


  var setIsLoading = function setIsLoading() {
    return dispatch({
      type: _types.SET_IS_LOADING
    });
  };

  return _react.default.createElement(_githubContext.default.Provider, {
    value: {
      users: state.users,
      user: state.user,
      repos: state.repos,
      isLoading: state.isLoading,
      searchUsers: searchUsers,
      clearUsers: clearUsers,
      getUser: getUser,
      getUserRepos: getUserRepos
    }
  }, props.children);
};

var _default = GithubState;
exports.default = _default;