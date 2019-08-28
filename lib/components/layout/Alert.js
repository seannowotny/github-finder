"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _alertContext = _interopRequireDefault(require("../../context/alert/alertContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Alert = function Alert() {
  var _useContext = (0, _react.useContext)(_alertContext.default),
      alert = _useContext.alert;

  if (alert) {
    var type = alert.type,
        msg = alert.msg;
    return alert && _react.default.createElement("div", {
      className: "alert alert-".concat(String(type))
    }, _react.default.createElement("i", {
      className: "fas fa-info-circle"
    }), " ", msg);
  } else {
    return null;
  }
};

var _default = Alert;
exports.default = _default;