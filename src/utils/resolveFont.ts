import { LoadedFontsDictionary } from "../interfaces/LoadedFontsDictionary";

const resolveFont = (
  loadedFonts: LoadedFontsDictionary,
  newFont: string | undefined,
  font: string | undefined,
  defaultFont: string
): string => {
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
