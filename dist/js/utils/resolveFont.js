"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var resolveFont = function resolveFont(loadedFonts, newFont, font, defaultFont) {
  if (!newFont || !(newFont in loadedFonts) || loadedFonts[newFont] === false) {
    if (font && font !== newFont) {
      return resolveFont(loadedFonts, font, font, defaultFont);
    } else {
      return defaultFont;
    }
  }

  return newFont;
};

var _default = resolveFont;
exports.default = _default;
//# sourceMappingURL=resolveFont.js.map