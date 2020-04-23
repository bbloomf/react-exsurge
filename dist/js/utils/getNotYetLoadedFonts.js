"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getNotYetLoadedFonts = function getNotYetLoadedFonts(fonts, loadedFonts) {
  return fonts.filter(function (font) {
    return !!font && !(font in loadedFonts);
  });
};

var _default = getNotYetLoadedFonts;
exports.default = _default;
//# sourceMappingURL=getNotYetLoadedFonts.js.map