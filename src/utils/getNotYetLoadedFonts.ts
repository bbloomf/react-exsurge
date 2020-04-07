import { LoadedFontsDictionary } from "../interfaces/LoadedFontsDictionary";

const getNotYetLoadedFonts = (
  fonts: (string | undefined)[],
  loadedFonts: LoadedFontsDictionary
) => fonts.filter(font => !!font && !(font in loadedFonts));

export default getNotYetLoadedFonts;
