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
  onKeyDown
}) => {
  const supertitleSize = textStyles.supertitle?.size;
  const titleSize = textStyles.title?.size;
  const subtitleSize = textStyles.subtitle?.size;
  const leftRightSize = textStyles.leftRight?.size;
  const annotationArray = useArray(annotation instanceof Array ? annotation : [annotation]);
  const textFontsArray = useArray([textStyles.supertitle?.font, textStyles.title?.font, textStyles.subtitle?.font, textStyles.leftRight?.font, textStyles.annotation?.font, textStyles.dropCap?.font, textStyles.al?.font, textStyles.choralSign?.font, textStyles.lyric?.font, textStyles.translation?.font, font, defaultFont]);
  const textSizesArray = useArray([textStyles.supertitle?.size, textStyles.title?.size, textStyles.subtitle?.size, textStyles.leftRight?.size, textStyles.annotation?.size, textStyles.dropCap?.size, textStyles.al?.size, textStyles.choralSign?.size, textStyles.lyric?.size, textStyles.translation?.size]);
  const textColorsArray = useArray([textStyles.supertitle?.color, textStyles.title?.color, textStyles.subtitle?.color, textStyles.leftRight?.color, textStyles.annotation?.color, textStyles.dropCap?.color, textStyles.al?.color, textStyles.choralSign?.color, textStyles.lyric?.color, textStyles.translation?.color]);
  const titleAlignmentsArray = useArray([textStyles.supertitle?.alignment, textStyles.title?.alignment, textStyles.subtitle?.alignment]);
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

    ctxt.specialCharText = char => char.toLowerCase();

    ctxt.textAfterSpecialChar = "";
    ctxt.setRubricColor("#d00");
    ctxt.minSpaceAboveStaff = 0;
    ctxt.editable = !!contentEditable;
    ctxt.useExtraTextOnly = !contentEditable;
  }

  const ctxt = ctxtRef.current;
  const handleScoreUpdate = useCallback((score, gabcHeaderLen) => {
    if (typeof onScoreUpdate === "function") onScoreUpdate(score, gabcHeaderLen);
  }, [onScoreUpdate]);
  const scoreRef = useRef();

  function getScore() {
    if (!scoreRef.current) scoreRef.current = new exsurge.ChantScore(ctxt);
    return scoreRef.current;
  }

  const score = getScore();

  if (process.env.NODE_ENV === "development") {} // DEBUG: window.$score = score;
  // load font.  Right now we use Google, but webfontloader supports
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
    // don't set the fonts if they haven't yet loaded:
    if (getNotYetLoadedFonts(textFontsArray, loadedFontsRef.current).length > 0) return;
    const interSyllabicMultiplier = interSyllabicSpacing;
    ctxt.setStaffHeight(staffSize);
    ctxt.interSyllabicMultiplier = interSyllabicMultiplier;
    ctxt.interVerbalMultiplier = interSyllabicMultiplier * 0.25;
    ctxt.spaceBetweenSystems = spaceBetweenSystems;
    ctxt.minSpaceBelowStaff = spaceAboveLyrics;
    ctxt.setFont(resolveLocalFont(textStyles.lyric?.font), baseFontSize);

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
          ctxt.textStyles[key].alignment = textStyle?.alignment || defaultTitleAlignment;
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

  const createReactSvg = svgTree => typeof svgTree === "string" ? svgTree : React.createElement(svgTree.name || React.Fragment, svgTree.props, ...(svgTree.children || []).map(createReactSvg));

  const divs = (score.pages || []).map((page, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    id: id && id + "-" + i,
    className: `Exsurge ${className || ""}`,
    style: style,
    contentEditable: contentEditable,
    onKeyDown: onKeyDown
  }, createReactSvg(page.createSvgTree(ctxt, zoom))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, divs);
};

Exsurge.propTypes = {
  gabc: _pt.string.isRequired,
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
  spaceAboveLyrics: _pt.number
};
export default Exsurge;
export * from "exsurge";
//# sourceMappingURL=Exsurge.js.map