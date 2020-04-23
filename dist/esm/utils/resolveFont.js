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

export default resolveFont;
//# sourceMappingURL=resolveFont.js.map