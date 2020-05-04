(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components/Exsurge", "./components/SyllabifiedExsurge"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components/Exsurge"), require("./components/SyllabifiedExsurge"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Exsurge, global.SyllabifiedExsurge);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Exsurge, _SyllabifiedExsurge) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SyllabifiedExsurge = undefined;
  Object.keys(_Exsurge).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Exsurge[key];
      }
    });
  });

  var _Exsurge2 = _interopRequireDefault(_Exsurge);

  var _SyllabifiedExsurge2 = _interopRequireDefault(_SyllabifiedExsurge);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Exsurge2.default;
  exports.SyllabifiedExsurge = _SyllabifiedExsurge2.default;
});
//# sourceMappingURL=index.js.map