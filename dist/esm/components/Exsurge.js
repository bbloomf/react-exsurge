import _pt from "prop-types";
import React, { useState, useRef, useEffect, useCallback } from "react";
import WebFont from "webfontloader";
import * as exsurge from "exsurge";
import usePrevious from "../hooks/usePrevious";
import useArray from "../hooks/useArray";
import getNotYetLoadedFonts from "../utils/getNotYetLoadedFonts";
import resolveFont from "../utils/resolveFont";

const Exsurge = ({
  gabc,
  useDropCap = true,
  annotation = [],
  contentEditable = false,
  alignment = "latin",
  width = -1,
  height = -1,
  zoom,
  selection,
  id,
  style,
  className,
  supertitle,
  title,
  subtitle,
  textLeft,
  textRight,
  defaultFont = "EB Garamond",
  defaultColor = "#000000",
  defaultTitleAlignment = "center",
  font,
  staffSize = 37.5,
  baseFontSize = staffSize * 19.2 / 37.5,
  interSyllabicSpacing = 2.5,
  spaceBetweenSystems = 1.5,
  spaceAboveLyrics = 0.75,
  textStyles = {},
  onScoreUpdate,
  onKeyDown,
  mapAnnotationSpansToTextLeft
}) => {
  var _textStyles$supertitl, _textStyles$title, _textStyles$subtitle, _textStyles$leftRight, _textStyles$supertitl2, _textStyles$title2, _textStyles$subtitle2, _textStyles$leftRight2, _textStyles$annotatio, _textStyles$dropCap, _textStyles$al, _textStyles$choralSig, _textStyles$lyric, _textStyles$translati, _textStyles$supertitl3, _textStyles$title3, _textStyles$subtitle3, _textStyles$leftRight3, _textStyles$annotatio2, _textStyles$dropCap2, _textStyles$al2, _textStyles$choralSig2, _textStyles$lyric2, _textStyles$translati2, _textStyles$supertitl4, _textStyles$title4, _textStyles$subtitle4, _textStyles$leftRight4, _textStyles$annotatio3, _textStyles$dropCap3, _textStyles$al3, _textStyles$choralSig3, _textStyles$lyric3, _textStyles$translati3, _textStyles$supertitl5, _textStyles$title5, _textStyles$subtitle5;

  const supertitleSize = (_textStyles$supertitl = textStyles.supertitle) === null || _textStyles$supertitl === void 0 ? void 0 : _textStyles$supertitl.size;
  const titleSize = (_textStyles$title = textStyles.title) === null || _textStyles$title === void 0 ? void 0 : _textStyles$title.size;
  const subtitleSize = (_textStyles$subtitle = textStyles.subtitle) === null || _textStyles$subtitle === void 0 ? void 0 : _textStyles$subtitle.size;
  const leftRightSize = (_textStyles$leftRight = textStyles.leftRight) === null || _textStyles$leftRight === void 0 ? void 0 : _textStyles$leftRight.size;
  const annotationArray = useArray(annotation instanceof Array ? annotation : [annotation]);
  const textFontsArray = useArray([(_textStyles$supertitl2 = textStyles.supertitle) === null || _textStyles$supertitl2 === void 0 ? void 0 : _textStyles$supertitl2.font, (_textStyles$title2 = textStyles.title) === null || _textStyles$title2 === void 0 ? void 0 : _textStyles$title2.font, (_textStyles$subtitle2 = textStyles.subtitle) === null || _textStyles$subtitle2 === void 0 ? void 0 : _textStyles$subtitle2.font, (_textStyles$leftRight2 = textStyles.leftRight) === null || _textStyles$leftRight2 === void 0 ? void 0 : _textStyles$leftRight2.font, (_textStyles$annotatio = textStyles.annotation) === null || _textStyles$annotatio === void 0 ? void 0 : _textStyles$annotatio.font, (_textStyles$dropCap = textStyles.dropCap) === null || _textStyles$dropCap === void 0 ? void 0 : _textStyles$dropCap.font, (_textStyles$al = textStyles.al) === null || _textStyles$al === void 0 ? void 0 : _textStyles$al.font, (_textStyles$choralSig = textStyles.choralSign) === null || _textStyles$choralSig === void 0 ? void 0 : _textStyles$choralSig.font, (_textStyles$lyric = textStyles.lyric) === null || _textStyles$lyric === void 0 ? void 0 : _textStyles$lyric.font, (_textStyles$translati = textStyles.translation) === null || _textStyles$translati === void 0 ? void 0 : _textStyles$translati.font, font, defaultFont]);
  const textSizesArray = useArray([(_textStyles$supertitl3 = textStyles.supertitle) === null || _textStyles$supertitl3 === void 0 ? void 0 : _textStyles$supertitl3.size, (_textStyles$title3 = textStyles.title) === null || _textStyles$title3 === void 0 ? void 0 : _textStyles$title3.size, (_textStyles$subtitle3 = textStyles.subtitle) === null || _textStyles$subtitle3 === void 0 ? void 0 : _textStyles$subtitle3.size, (_textStyles$leftRight3 = textStyles.leftRight) === null || _textStyles$leftRight3 === void 0 ? void 0 : _textStyles$leftRight3.size, (_textStyles$annotatio2 = textStyles.annotation) === null || _textStyles$annotatio2 === void 0 ? void 0 : _textStyles$annotatio2.size, (_textStyles$dropCap2 = textStyles.dropCap) === null || _textStyles$dropCap2 === void 0 ? void 0 : _textStyles$dropCap2.size, (_textStyles$al2 = textStyles.al) === null || _textStyles$al2 === void 0 ? void 0 : _textStyles$al2.size, (_textStyles$choralSig2 = textStyles.choralSign) === null || _textStyles$choralSig2 === void 0 ? void 0 : _textStyles$choralSig2.size, (_textStyles$lyric2 = textStyles.lyric) === null || _textStyles$lyric2 === void 0 ? void 0 : _textStyles$lyric2.size, (_textStyles$translati2 = textStyles.translation) === null || _textStyles$translati2 === void 0 ? void 0 : _textStyles$translati2.size]);
  const textColorsArray = useArray([(_textStyles$supertitl4 = textStyles.supertitle) === null || _textStyles$supertitl4 === void 0 ? void 0 : _textStyles$supertitl4.color, (_textStyles$title4 = textStyles.title) === null || _textStyles$title4 === void 0 ? void 0 : _textStyles$title4.color, (_textStyles$subtitle4 = textStyles.subtitle) === null || _textStyles$subtitle4 === void 0 ? void 0 : _textStyles$subtitle4.color, (_textStyles$leftRight4 = textStyles.leftRight) === null || _textStyles$leftRight4 === void 0 ? void 0 : _textStyles$leftRight4.color, (_textStyles$annotatio3 = textStyles.annotation) === null || _textStyles$annotatio3 === void 0 ? void 0 : _textStyles$annotatio3.color, (_textStyles$dropCap3 = textStyles.dropCap) === null || _textStyles$dropCap3 === void 0 ? void 0 : _textStyles$dropCap3.color, (_textStyles$al3 = textStyles.al) === null || _textStyles$al3 === void 0 ? void 0 : _textStyles$al3.color, (_textStyles$choralSig3 = textStyles.choralSign) === null || _textStyles$choralSig3 === void 0 ? void 0 : _textStyles$choralSig3.color, (_textStyles$lyric3 = textStyles.lyric) === null || _textStyles$lyric3 === void 0 ? void 0 : _textStyles$lyric3.color, (_textStyles$translati3 = textStyles.translation) === null || _textStyles$translati3 === void 0 ? void 0 : _textStyles$translati3.color]);
  const titleAlignmentsArray = useArray([(_textStyles$supertitl5 = textStyles.supertitle) === null || _textStyles$supertitl5 === void 0 ? void 0 : _textStyles$supertitl5.alignment, (_textStyles$title5 = textStyles.title) === null || _textStyles$title5 === void 0 ? void 0 : _textStyles$title5.alignment, (_textStyles$subtitle5 = textStyles.subtitle) === null || _textStyles$subtitle5 === void 0 ? void 0 : _textStyles$subtitle5.alignment]);
  const [, setRenderCount] = useState(0);
  const ctxtRef = useRef();
  const headerLenRef = useRef(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!ctxtRef.current) {
    let ctxt = ctxtRef.current = new exsurge.ChantContext(exsurge.TextMeasuringStrategy.Canvas);
    ctxt.specialCharProperties["font-family"] = `Versiculum`;
    ctxt.specialCharProperties["font-variant"] = "normal";
    ctxt.specialCharProperties["font-size"] = "120%";
    ctxt.specialCharProperties["font-weight"] = "400";

    const defaultSpecialCharText = ctxt.specialCharText || (char => char);

    ctxt.specialCharText = char => defaultSpecialCharText(char).toLowerCase();

    ctxt.textAfterSpecialChar = "";
    ctxt.setRubricColor("#d00");
    ctxt.minSpaceAboveStaff = 0;
    ctxt.editable = !!contentEditable;
    ctxt.useExtraTextOnly = !contentEditable;
  }

  const ctxt = ctxtRef.current;
  useEffect(() => {
    if (typeof mapAnnotationSpansToTextLeft === 'function') {
      ctxt.mapAnnotationSpansToTextLeft = mapAnnotationSpansToTextLeft;
    }
  }, [ctxt, mapAnnotationSpansToTextLeft]);
  const handleScoreUpdate = useCallback((score, gabcHeaderLen) => {
    if (typeof onScoreUpdate === "function") onScoreUpdate(score, gabcHeaderLen);
  }, [onScoreUpdate]);
  const scoreRef = useRef();

  function getScore() {
    if (!scoreRef.current) scoreRef.current = new exsurge.ChantScore(ctxt);
    return scoreRef.current;
  }

  const score = getScore();

  if (process.env.NODE_ENV === "development") {// DEBUG: window.$score = score;
  } // load font.  Right now we use Google, but webfontloader supports
  // • edgewebfonts.adobe.com
  // • Fontdeck.com
  // • Fonts.com
  // • Typekit.com


  const loadedFontsRef = useRef({});
  useEffect(() => {
    // TODO...keep track of whether Bold, Italic, etc. are needed, and load them as necessary
    // first calculate which distinct fonts we need:
    const loadedFonts = loadedFontsRef.current,
          fontsUsedButNotLoaded = new Set(getNotYetLoadedFonts(textFontsArray, loadedFonts)),
          families = Array.from(fontsUsedButNotLoaded).map(font => `${font}:400,400i,700,700i`);

    if (families.length) {
      setFontLoaded(false);
      WebFont.load({
        google: {
          families
        },
        classes: false,
        fontactive: (familyName, fvd) => {
          if (fvd === "n4") {
            loadedFonts[familyName] = true;
            if (getNotYetLoadedFonts(textFontsArray, loadedFonts).length === 0) // all required fonts have been loaded:
              setFontLoaded(true);
          }
        },
        fontinactive: (familyName, fvd) => {
          if (fvd === "n4") {
            loadedFonts[familyName] = false;
          }
        }
      });
    }
  }, [textFontsArray]);
  const resolveLocalFont = useCallback(newFont => resolveFont(loadedFontsRef.current, newFont, font, defaultFont), [font, defaultFont]); // Set fonts, sizes, and colors:

  useEffect(() => {
    var _textStyles$lyric4;

    // don't set the fonts if they haven't yet loaded:
    if (getNotYetLoadedFonts(textFontsArray, loadedFontsRef.current).length > 0) return;
    const interSyllabicMultiplier = interSyllabicSpacing;
    ctxt.setStaffHeight(staffSize);
    ctxt.interSyllabicMultiplier = interSyllabicMultiplier;
    ctxt.interVerbalMultiplier = interSyllabicMultiplier * 0.25;
    ctxt.spaceBetweenSystems = spaceBetweenSystems;
    ctxt.minSpaceBelowStaff = spaceAboveLyrics;
    ctxt.setFont(resolveLocalFont((_textStyles$lyric4 = textStyles.lyric) === null || _textStyles$lyric4 === void 0 ? void 0 : _textStyles$lyric4.font), baseFontSize);

    for (let [k, textType] of Object.entries(exsurge.TextTypes)) {
      // Is there a better way to do type assertion than this?
      let key = k;
      const textStyle = textStyles[key] || {}; // font

      ctxt.textStyles[key].font = resolveLocalFont(textStyle.font); // size

      if (textType.defaultSize && textStyle.size !== undefined) {
        ctxt.textStyles[key].size = textType.defaultSize(textStyle.size * baseFontSize);
      } // color


      ctxt.textStyles[key].color = textStyle.color || defaultColor; // alignment

      switch (key) {
        case "supertitle":
        case "title":
        case "subtitle":
          ctxt.textStyles[key].alignment = (textStyle === null || textStyle === void 0 ? void 0 : textStyle.alignment) || defaultTitleAlignment;
          break;
        // TODO: allow padding to be changed? on dropCap and annotation
      }
    }

    ctxt.defaultLanguage = exsurge.language[alignment];
    score.forceLayout = true; // eslint-disable-next-line
  }, [fontLoaded, font, defaultFont, staffSize, interSyllabicSpacing, spaceBetweenSystems, baseFontSize, alignment, textSizesArray, textFontsArray, textColorsArray, titleAlignmentsArray, ctxt, score]);
  useEffect(() => {
    score.useDropCap = useDropCap;
    score.recreateDropCap(ctxt);
    score.forceLayout = true;
    handleScoreUpdate(score, headerLenRef.current);
  }, [useDropCap, score, ctxt, handleScoreUpdate]);
  const insertion = selection && selection.element && selection.element.insertion;
  const selectionInsertion = insertion ? typeof insertion.afterElementIndex === "number" ? insertion.afterElementIndex : -1 - (insertion.chantLine || -1) : undefined;
  const previousSelectionInsertion = usePrevious(selectionInsertion);
  const elementSelection = selection && selection.element || null;
  useEffect(() => {
    headerLenRef.current = exsurge.Gabc.updateMappingsFromSource(ctxt, score.mappings, gabc, selectionInsertion, previousSelectionInsertion);
    score.updateNotations(ctxt);
    handleScoreUpdate(score, headerLenRef.current);
  }, [gabc, selectionInsertion, ctxt, score, handleScoreUpdate]);
  useEffect(() => {
    score.annotation = annotationArray.length ? new exsurge.Annotations(ctxt, ...annotationArray) : null;
    handleScoreUpdate(score, headerLenRef.current);
  }, [annotationArray, ctxt, score, handleScoreUpdate]); // title effects:

  useEffect(() => {
    score.titles.setSupertitle(ctxt, supertitle);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, supertitle, supertitleSize, handleScoreUpdate]);
  useEffect(() => {
    score.titles.setTitle(ctxt, title);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, title, titleSize, handleScoreUpdate]);
  useEffect(() => {
    score.titles.setSubtitle(ctxt, subtitle);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, subtitle, subtitleSize, handleScoreUpdate]);
  useEffect(() => {
    score.titles.setTextLeft(ctxt, textLeft);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, textLeft, leftRightSize, handleScoreUpdate]);
  useEffect(() => {
    score.titles.setTextRight(ctxt, textRight);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, textRight, leftRightSize, handleScoreUpdate]);
  useEffect(() => {
    if (!fontLoaded) return;
    score.performLayout(ctxt, score.forceLayout);
    score.forceLayout = false;
  }, [score, ctxt, fontLoaded, textFontsArray, textSizesArray, textColorsArray, titleAlignmentsArray, staffSize, interSyllabicSpacing, spaceBetweenSystems, baseFontSize, alignment, useDropCap, gabc, selectionInsertion, annotationArray, handleScoreUpdate]); // const appendSvgForPage = useCallback(pageI => {
  //   const svgParent = divRefs.current[pageI];
  //   while (svgParent && svgParent.firstChild)
  //     svgParent.removeChild(svgParent.firstChild);
  //   let svg = svgRefs.current[pageI];
  //   if (svgParent && svg) svgParent.appendChild(svg);
  // }, []);
  // const divRefs = useRef([]),
  //   svgRefs = useRef([]);
  // const [pageCount, setPageCount] = useState(1);
  // const addSvgRef = (ref, i) => {
  //   divRefs.current[i] = ref;
  //   appendSvgForPage(i);
  // };

  useEffect(() => {
    if (!fontLoaded) return;
    score.layoutChantLines(ctxt, width);

    if (height > 0) {
      score.paginate(height); // setPageCount(score.pages.length);
    }

    setRenderCount(count => count + 1);
  }, [score, ctxt, fontLoaded, textFontsArray, textSizesArray, textColorsArray, titleAlignmentsArray, supertitle, title, subtitle, textLeft, textRight, staffSize, interSyllabicSpacing, spaceBetweenSystems, baseFontSize, alignment, useDropCap, gabc, selectionInsertion, annotationArray, width, height, handleScoreUpdate]); // selection:

  useEffect(() => {
    let newSelection = {};
    if (elementSelection) newSelection.element = elementSelection;
    score.updateSelection(newSelection);
    setRenderCount(count => count + 1);
  }, [score, ctxt, elementSelection]);

  const createReactSvg = svgTree => typeof svgTree === "string" ? svgTree : /*#__PURE__*/React.createElement(svgTree.name || React.Fragment, svgTree.props, ...(svgTree.children || []).map(createReactSvg));

  const divs = (score.pages || []).map((page, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    id: id && id + "-" + i,
    className: `Exsurge ${className || ""}`,
    style: style,
    onKeyDown: onKeyDown
  }, createReactSvg(page.createSvgTree(ctxt, zoom))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, divs);
};

Exsurge.propTypes = {
  useDropCap: _pt.bool,
  annotation: _pt.oneOfType([_pt.string, _pt.arrayOf(_pt.string)]),
  contentEditable: _pt.bool,
  alignment: _pt.oneOf(["english", "latin"]),
  width: _pt.number,
  height: _pt.number,
  zoom: _pt.number,
  id: _pt.string,
  style: _pt.any,
  className: _pt.string,
  supertitle: _pt.string,
  title: _pt.string,
  subtitle: _pt.string,
  textLeft: _pt.string,
  textRight: _pt.string,
  defaultFont: _pt.string,
  defaultColor: _pt.string,
  defaultTitleAlignment: _pt.string,
  font: _pt.string,
  baseFontSize: _pt.number,
  staffSize: _pt.number,
  interSyllabicSpacing: _pt.number,
  spaceBetweenSystems: _pt.number,
  spaceAboveLyrics: _pt.number,
  gabc: _pt.string.isRequired
};
export default Exsurge;
export * from "exsurge";
//# sourceMappingURL=Exsurge.js.map