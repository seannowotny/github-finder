"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _alertContext = _interopRequireDefault(require("./alertContext"));

var _alertReducer = _interopRequireDefault(require("./alertReducer"));

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//#endregion
var AlertState = function AlertState(props) {
  var initialState = null;

  var _useReducer = (0, _react.useReducer)(_alertReducer.default, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1]; //Set Alert


  var setAlert = function setAlert(msg, type) {
    dispatch({
      type: _types.SET_ALERT,
      payload: {
        msg: msg,
        type: type
      }
    });
    setTimeout(function () {
      return dispatch({
        type: _types.REMOVE_ALERT
      });
    }, 3000);
  };

  return _react.default.createElement(_alertContext.default.Provider, {
    value: {
      alert: state,
      setAlert: setAlert
    }
  }, props.children);
};

var _default = AlertState;
exports.default = _default;