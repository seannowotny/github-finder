"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _spinner = _interopRequireDefault(require("./spinner.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Spinner = function Spinner() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("img", {
    src: _spinner.default,
    alt: "Loading...",
    style: {
      width: '200px',
      margin: 'auto',
      display: 'block'
    }
  }));
};

var _default = Spinner;
exports.default = _default;