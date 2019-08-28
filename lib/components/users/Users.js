"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _githubContext = _interopRequireDefault(require("../../context/github/githubContext"));

var _UserItem = _interopRequireDefault(require("./UserItem"));

var _Spinner = _interopRequireDefault(require("../layout/Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Users = function Users() {
  var _useContext = (0, _react.useContext)(_githubContext.default),
      isLoading = _useContext.isLoading,
      users = _useContext.users;

  var result;

  if (isLoading) {
    result = _react.default.createElement(_Spinner.default, null);
  } else {
    result = _react.default.createElement("div", {
      style: userStyle
    }, users.map(function (user) {
      return _react.default.createElement(_UserItem.default, {
        key: user.id,
        user: user
      });
    }));
  }

  return result;
};

var userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
var _default = Users;
exports.default = _default;