const getNotYetLoadedFonts = (fonts, loadedFonts) => fonts.filter(font => !!font && !(font in loadedFonts));

export default getNotYetLoadedFonts;
//# sourceMappingURL=getNotYetLoadedFonts.js.map