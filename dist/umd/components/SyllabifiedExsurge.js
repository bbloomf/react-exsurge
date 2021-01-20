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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  const SyllabifiedExsurge = _ref => {
    let {
      text,
      notation,
      isEasterTime
    } = _ref,
        otherProps = _objectWithoutProperties(_ref, ["text", "notation", "isEasterTime"]);

    const gabc = _gabcUtils.GabcSyllabified.merge(text, notation, isEasterTime, otherProps.useDropCap);

    return /*#__PURE__*/_react2.default.createElement(_Exsurge2.default, _extends({
      gabc: gabc
    }, otherProps));
  };

  SyllabifiedExsurge.propTypes = {
    text: _propTypes2.default.string.isRequired,
    notation: _propTypes2.default.string.isRequired,
    isEasterTime: _propTypes2.default.bool
  };
  exports.default = SyllabifiedExsurge;
});
//# sourceMappingURL=SyllabifiedExsurge.js.map