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

var SyllabifiedExsurge = function SyllabifiedExsurge(_ref) {
  var text = _ref.text,
      notation = _ref.notation,
      isEasterTime = _ref.isEasterTime,
      _ref$capitalizeInitia = _ref.capitalizeInitial,
      capitalizeInitial = _ref$capitalizeInitia === void 0 ? true : _ref$capitalizeInitia,
      useDropCap = _ref.useDropCap,
      annotation = _ref.annotation,
      contentEditable = _ref.contentEditable,
      alignment = _ref.alignment,
      width = _ref.width,
      height = _ref.height,
      zoom = _ref.zoom,
      selection = _ref.selection,
      id = _ref.id,
      style = _ref.style,
      className = _ref.className,
      supertitle = _ref.supertitle,
      title = _ref.title,
      subtitle = _ref.subtitle,
      textLeft = _ref.textLeft,
      textRight = _ref.textRight,
      defaultFont = _ref.defaultFont,
      defaultColor = _ref.defaultColor,
      defaultTitleAlignment = _ref.defaultTitleAlignment,
      font = _ref.font,
      staffSize = _ref.staffSize,
      baseFontSize = _ref.baseFontSize,
      interSyllabicSpacing = _ref.interSyllabicSpacing,
      spaceBetweenSystems = _ref.spaceBetweenSystems,
      spaceAboveLyrics = _ref.spaceAboveLyrics,
      textStyles = _ref.textStyles,
      onScoreUpdate = _ref.onScoreUpdate,
      onKeyDown = _ref.onKeyDown;

  var gabc = _gabcUtils.GabcSyllabified.merge(text, notation, isEasterTime, capitalizeInitial);

  return /*#__PURE__*/_react.default.createElement(_Exsurge.default, {
    gabc: gabc,
    useDropCap: useDropCap,
    annotation: annotation,
    contentEditable: contentEditable,
    alignment: alignment,
    width: width,
    height: height,
    zoom: zoom,
    selection: selection,
    id: id,
    style: style,
    className: className,
    supertitle: supertitle,
    title: title,
    subtitle: subtitle,
    textLeft: textLeft,
    textRight: textRight,
    defaultFont: defaultFont,
    defaultColor: defaultColor,
    defaultTitleAlignment: defaultTitleAlignment,
    font: font,
    staffSize: staffSize,
    baseFontSize: baseFontSize,
    interSyllabicSpacing: interSyllabicSpacing,
    spaceBetweenSystems: spaceBetweenSystems,
    spaceAboveLyrics: spaceAboveLyrics,
    textStyles: textStyles,
    onScoreUpdate: onScoreUpdate,
    onKeyDown: onKeyDown
  });
};

SyllabifiedExsurge.propTypes = {
  text: _propTypes.default.string.isRequired,
  notation: _propTypes.default.string.isRequired,
  isEasterTime: _propTypes.default.bool,
  capitalizeInitial: _propTypes.default.bool,
  useDropCap: _propTypes.default.bool,
  annotation: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  contentEditable: _propTypes.default.bool,
  alignment: _propTypes.default.oneOf(["english", "latin"]),
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  zoom: _propTypes.default.number,
  id: _propTypes.default.string,
  style: _propTypes.default.any,
  className: _propTypes.default.string,
  supertitle: _propTypes.default.string,
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  textLeft: _propTypes.default.string,
  textRight: _propTypes.default.string,
  defaultFont: _propTypes.default.string,
  defaultColor: _propTypes.default.string,
  defaultTitleAlignment: _propTypes.default.string,
  font: _propTypes.default.string,
  baseFontSize: _propTypes.default.number,
  staffSize: _propTypes.default.number
};
var _default = SyllabifiedExsurge;
exports.default = _default;
//# sourceMappingURL=SyllabifiedExsurge.js.map