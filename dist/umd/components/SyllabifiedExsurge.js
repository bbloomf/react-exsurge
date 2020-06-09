(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "gabc-utils", "./Exsurge"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("gabc-utils"), require("./Exsurge"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.gabcUtils, global.Exsurge);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _gabcUtils, _Exsurge) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _Exsurge2 = _interopRequireDefault(_Exsurge);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const SyllabifiedExsurge = ({
    text,
    notation,
    capitalizeInitial = true,
    useDropCap,
    annotation,
    contentEditable,
    alignment,
    width,
    height,
    zoom,
    selection,
    id,
    style,
    className,
    supertitle,
    title,
    subtitle,
    textLeft,
    textRight,
    defaultFont,
    defaultColor,
    defaultTitleAlignment,
    font,
    staffSize,
    baseFontSize,
    interSyllabicSpacing,
    spaceBetweenSystems,
    spaceAboveLyrics,
    textStyles,
    onScoreUpdate,
    onKeyDown
  }) => {
    const gabc = _gabcUtils.GabcSyllabified.merge(text, notation, capitalizeInitial);

    return /*#__PURE__*/_react2.default.createElement(_Exsurge2.default, {
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
    text: _propTypes2.default.string.isRequired,
    notation: _propTypes2.default.string.isRequired,
    capitalizeInitial: _propTypes2.default.bool,
    useDropCap: _propTypes2.default.bool,
    annotation: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    contentEditable: _propTypes2.default.bool,
    alignment: _propTypes2.default.oneOf(["english", "latin"]),
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    zoom: _propTypes2.default.number,
    id: _propTypes2.default.string,
    style: _propTypes2.default.any,
    className: _propTypes2.default.string,
    supertitle: _propTypes2.default.string,
    title: _propTypes2.default.string,
    subtitle: _propTypes2.default.string,
    textLeft: _propTypes2.default.string,
    textRight: _propTypes2.default.string,
    defaultFont: _propTypes2.default.string,
    defaultColor: _propTypes2.default.string,
    defaultTitleAlignment: _propTypes2.default.string,
    font: _propTypes2.default.string,
    baseFontSize: _propTypes2.default.number,
    staffSize: _propTypes2.default.number,
    interSyllabicSpacing: _propTypes2.default.number
  };
  exports.default = SyllabifiedExsurge;
});
//# sourceMappingURL=SyllabifiedExsurge.js.map