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

  const resolveFont = (loadedFonts, newFont, font, defaultFont) => {
    if (!newFont || !(newFont in loadedFonts) || loadedFonts[newFont] === false) {
      if (font && font !== newFont) {
        return resolveFont(loadedFonts, font, font, defaultFont);
      } else {
        return defaultFont;
      }
    }

    return newFont;
  };

  exports.default = resolveFont;
});
//# sourceMappingURL=resolveFont.js.map