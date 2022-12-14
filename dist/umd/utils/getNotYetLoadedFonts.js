(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const getNotYetLoadedFonts = (fonts, loadedFonts) => fonts.filter(font => !!font && !(font in loadedFonts));

  exports.default = getNotYetLoadedFonts;
});
//# sourceMappingURL=getNotYetLoadedFonts.js.map