(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components/Exsurge"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components/Exsurge"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Exsurge);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Exsurge) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Exsurge2.default;
});
//# sourceMappingURL=index.js.map