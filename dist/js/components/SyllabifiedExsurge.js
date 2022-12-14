"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _gabcUtils = require("gabc-utils");

var _Exsurge = _interopRequireDefault(require("./Exsurge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SyllabifiedExsurge = function SyllabifiedExsurge(_ref) {
  var text = _ref.text,
      notation = _ref.notation,
      isEasterTime = _ref.isEasterTime,
      otherProps = _objectWithoutProperties(_ref, ["text", "notation", "isEasterTime"]);

  var gabc = _gabcUtils.GabcSyllabified.merge(text, notation, isEasterTime, otherProps.useDropCap);

  return /*#__PURE__*/_react.default.createElement(_Exsurge.default, _extends({
    gabc: gabc
  }, otherProps));
};

SyllabifiedExsurge.propTypes = {
  text: _propTypes.default.string.isRequired,
  notation: _propTypes.default.string.isRequired,
  isEasterTime: _propTypes.default.bool
};
var _default = SyllabifiedExsurge;
exports.default = _default;
//# sourceMappingURL=SyllabifiedExsurge.js.map