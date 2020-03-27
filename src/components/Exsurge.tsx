import React, { useState, useRef, useEffect, useCallback } from "react";
import WebFont from "webfontloader";
import * as exsurge from "exsurge/src/index";
import usePrevious from "../hooks/usePrevious";

// import * as exsurge from "../js/exsurge";

const exsurgeLanguage = {
  english: new exsurge.English(),
  latin: new exsurge.Latin()
};
export const defaultFont = "EB Garamond";
export const defaultColor = "#000000";
export const defaultTitleAlignment = "center";
const __fontKeys = Object.keys(exsurge.TextTypes).map(key => key + "Font");
const __textSizeKeys = Object.keys(exsurge.TextTypes).map(key => key + "Size");
const __textColorKeys = Object.keys(exsurge.TextTypes).map(
  key => key + "Color"
);
const __titleAlignmentKeys = Object.keys(exsurge.TextTypes)
  .filter(key => /title$/.test(key))
  .map(key => key + "Alignment");

const getNotYetLoadedFonts = (fonts, loadedFonts) =>
  fonts.filter(font => !!font && !(font in loadedFonts));

exsurge.QuickSvg.react = React;

interface ExsurgeProps {
  annotationArray: string[];
  contentEditable: boolean;
}

const Exsurge: React.FC<ExsurgeProps> = (props: ExsurgeProps) => {
  const annotationArrayRef = useRef(null);
  if (
    typeof props.annotationArray != typeof annotationArrayRef.current ||
    (props.annotationArray &&
      props.annotationArray.join("|") !== annotationArrayRef.current.join("|"))
  ) {
    annotationArrayRef.current = props.annotationArray;
  }
  const annotationArray = annotationArrayRef.current;
  const [, setRenderCount] = useState(0);
  const ctxtRef = useRef(),
    headerLenRef = useRef(0),
    [fontLoaded, setFontLoaded] = useState(false),
    fontProps = __fontKeys.map(key => props[key]),
    textSizeProps = __textSizeKeys.map(key => props[key]),
    textColorProps = __textColorKeys.map(key => props[key]),
    titleAlignmentProps = __titleAlignmentKeys.map(key => props[key]);
  if (!ctxtRef.current) {
    let ctxt = (ctxtRef.current = new exsurge.ChantContext(
      exsurge.TextMeasuringStrategy.Canvas
    ));
    ctxt.specialCharProperties["font-family"] = `Versiculum`;
    ctxt.specialCharProperties["font-variant"] = "normal";
    ctxt.specialCharProperties["font-size"] = "120%";
    ctxt.specialCharProperties["font-weight"] = "400";
    ctxt.specialCharText = char => char.toLowerCase();
    ctxt.textAfterSpecialChar = "";
    ctxt.setRubricColor("#d00");
    ctxt.minSpaceAboveStaff = 0;

    ctxt.editable = !!props.contentEditable;

    ctxt.useExtraTextOnly = !props.contentEditable;
  }
  const ctxt = ctxtRef.current;
  const onScoreUpdate = props.onScoreUpdate;
  const handleScoreUpdate = useCallback(
    (score, gabcHeaderLen) => {
      if (typeof onScoreUpdate === "function")
        onScoreUpdate(score, gabcHeaderLen);
    },
    [onScoreUpdate]
  );
  const scoreRef = useRef();
  if (!scoreRef.current) scoreRef.current = new exsurge.ChantScore(ctxt);
  const score = scoreRef.current;
  if (process.env.NODE_ENV === "development") {
    window.$score = score;
  }

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
      fontsUsedButNotLoaded = new Set(
        getNotYetLoadedFonts(
          [...fontProps, props.font, defaultFont],
          loadedFonts
        )
      ),
      families = [...fontsUsedButNotLoaded].map(
        font => `${font}:400,400i,700,700i`
      );
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
            if (
              getNotYetLoadedFonts(
                [...fontProps, props.font, defaultFont],
                loadedFonts
              ).length === 0
            )
              // all required fonts have been loaded:
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
    // eslint-disable-next-line
  }, [
    props.font,
    // all font family props:
    // eslint-disable-next-line
    ...fontProps
  ]);

  const resolveFont = useCallback(
    font => {
      const loadedFonts = loadedFontsRef.current;
      if (!(font in loadedFonts) || loadedFonts[font] === false) {
        if (props.font && props.font !== font) {
          return resolveFont(props.font);
        } else {
          return defaultFont;
        }
      }
      return font;
    },
    [props.font]
  );

  // Set fonts, sizes, and colors:
  useEffect(() => {
    // don't set the fonts if they haven't yet loaded:
    if (
      getNotYetLoadedFonts(
        [...fontProps, props.font, defaultFont],
        loadedFontsRef.current
      ).length > 0
    )
      return;
    const baseFontSize = props.baseFontSize || 19.2,
      staffSize = props.staffSize || 37.5,
      interSyllabicMultiplier = props.interSyllabicSpacing || 2.5;
    ctxt.setStaffHeight(staffSize);
    ctxt.interSyllabicMultiplier = interSyllabicMultiplier;
    ctxt.interVerbalMultiplier = interSyllabicMultiplier * 0.25;
    ctxt.spaceBetweenSystems = props.spaceBetweenSystems || 1.5;
    ctxt.minSpaceBelowStaff = props.spaceAboveLyrics || 0.75;
    ctxt.setFont(resolveFont(props.lyricFont), baseFontSize);
    for (let [key, textType] of Object.entries(exsurge.TextTypes)) {
      for (let suffix of ["Size", "Font", "Color", "Alignment"]) {
        let propKey = key + suffix;
        if (propKey in props || suffix === "Font") {
          let value = props[propKey];
          switch (suffix) {
            case "Size":
              if (!textType.defaultSize) continue;
              value = textType.defaultSize(value * baseFontSize);
              break;
            case "Font":
              value = resolveFont(value);
              break;
            case "Color":
              value = value || defaultColor;
              break;
            case "Alignment":
              value = value || defaultTitleAlignment;
              break;
            default:
          }
          ctxt[key + "Text" + suffix] = value;
        }
      }
    }
    ctxt.defaultLanguage = exsurgeLanguage[props.alignment];
    score.forceLayout = true;
    // eslint-disable-next-line
  }, [
    resolveFont,
    fontLoaded,
    props.font,
    props.staffSize,
    props.interSyllabicSpacing,
    props.spaceBetweenSystems,
    props.baseFontSize,
    props.alignment,

    // eslint-disable-next-line
    ...textSizeProps,
    // eslint-disable-next-line
    ...fontProps,
    // eslint-disable-next-line
    ...textColorProps,
    // eslint-disable-next-line
    ...titleAlignmentProps,

    props.supertitleSize,
    props.titleSize,
    props.subtitleSize,
    props.leftRightSize,

    ctxt,
    score
  ]);

  useEffect(() => {
    score.useDropCap = props.useDropCap;
    score.recreateDropCap(ctxt);
    score.forceLayout = true;
    handleScoreUpdate(score, headerLenRef.current);
  }, [props.useDropCap, score, ctxt, handleScoreUpdate]);

  const insertion =
    props.selection &&
    props.selection.element &&
    props.selection.element.insertion;
  const selectionInsertion = insertion
    ? typeof insertion.afterElementIndex === "number"
      ? insertion.afterElementIndex
      : -1 - insertion.chantLine
    : undefined;
  const previousSelectionInsertion = usePrevious(selectionInsertion);
  const elementSelection = (props.selection && props.selection.element) || null;
  useEffect(() => {
    headerLenRef.current = exsurge.Gabc.updateMappingsFromSource(
      ctxt,
      score.mappings,
      props.gabc,
      selectionInsertion,
      previousSelectionInsertion
    );
    score.updateNotations(ctxt);
    handleScoreUpdate(score, headerLenRef.current);
  }, [props.gabc, selectionInsertion, ctxt, score, handleScoreUpdate]);

  useEffect(() => {
    score.annotation = props.annotation
      ? new exsurge.Annotations(
          ctxt,
          ...(annotationArray || [props.annotation])
        )
      : null;
    handleScoreUpdate(score, headerLenRef.current);
  }, [props.annotation, annotationArray, ctxt, score, handleScoreUpdate]);

  // title effects:
  useEffect(() => {
    score.titles.setSupertitle(ctxt, props.supertitle);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, props.supertitle, props.supertitleSize, handleScoreUpdate]);
  useEffect(() => {
    score.titles.setTitle(ctxt, props.title);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, props.title, props.titleSize, handleScoreUpdate]);
  useEffect(() => {
    score.titles.setSubtitle(ctxt, props.subtitle);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, props.subtitle, props.subtitleSize, handleScoreUpdate]);
  useEffect(() => {
    score.titles.setTextLeft(ctxt, props.textLeft);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, props.textLeft, props.textLeftSize, handleScoreUpdate]);
  useEffect(() => {
    score.titles.setTextRight(ctxt, props.textRight);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, props.textRight, props.textRightSize, handleScoreUpdate]);

  useEffect(() => {
    if (!fontLoaded) return;
    score.performLayout(ctxt, score.forceLayout);
    score.forceLayout = false;
  }, [
    score,
    ctxt,
    fontLoaded,

    props.font,
    // eslint-disable-next-line
    ...fontProps,
    // eslint-disable-next-line
    ...textSizeProps,
    // eslint-disable-next-line
    ...textColorProps,
    // eslint-disable-next-line
    ...titleAlignmentProps,

    props.staffSize,
    props.interSyllabicSpacing,
    props.spaceBetweenSystems,
    props.fontSize,
    props.alignment,
    props.useDropCap,
    props.gabc,
    selectionInsertion,
    props.annotation,
    handleScoreUpdate
  ]);

  // const appendSvgForPage = useCallback(pageI => {
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
    score.layoutChantLines(ctxt, props.width || -1);
    if (props.height > 0) {
      score.paginate(props.height);
      // setPageCount(score.pages.length);
    }
    setRenderCount(count => count + 1);
  }, [
    score,
    ctxt,
    fontLoaded,

    props.font,
    // eslint-disable-next-line
    ...fontProps,
    // eslint-disable-next-line
    ...textSizeProps,
    // eslint-disable-next-line
    ...textColorProps,
    // eslint-disable-next-line
    ...titleAlignmentProps,

    props.supertitle,
    props.title,
    props.subtitle,
    props.textLeft,
    props.textRight,

    props.staffSize,
    props.interSyllabicSpacing,
    props.spaceBetweenSystems,
    props.fontSize,
    props.alignment,
    props.useDropCap,
    props.gabc,
    selectionInsertion,
    props.annotation,
    props.width,
    props.height,
    handleScoreUpdate
  ]);

  // selection:
  useEffect(() => {
    score.updateSelection({ element: elementSelection });
    setRenderCount(count => count + 1);
  }, [score, ctxt, elementSelection]);

  // const { onRenderComplete } = props;
  // useEffect(() => {
  //   // TODO: Comment this all out
  //   if (!fontLoaded) return;
  //   const svgs = score.pages.map(page => {
  //     let svg = page.createSvgNode(ctxt);
  //     if (typeof props.zoom === "number")
  //       svg.setAttribute("width", props.zoom * props.width);
  //     else svg.removeAttribute("width");
  //     svg.removeAttribute("height");
  //     return svg;
  //   });
  //   svgRefs.current = svgs;
  //   let pageCount = Math.min(svgs.length, divRefs.current.length);
  //   for (let i = 0; i < pageCount; ++i) {
  //     appendSvgForPage(i);
  //   }

  //   if (typeof onRenderComplete === "function") onRenderComplete();
  // }, [
  //   score,
  //   ctxt,
  //   fontLoaded,
  //   appendSvgForPage,
  //   props.zoom,
  //   props.pageNum,

  //   elementSelection,

  //   props.font,
  //   // eslint-disable-next-line
  //   ...fontProps,
  //   // eslint-disable-next-line
  //   ...textSizeProps,
  //   // eslint-disable-next-line
  //   ...textColorProps,
  //   // eslint-disable-next-line
  //   ...titleAlignmentProps,

  //   props.supertitle,
  //   props.title,
  //   props.subtitle,
  //   props.textLeft,
  //   props.textRight,

  //   props.staffSize,
  //   props.interSyllabicSpacing,
  //   props.spaceBetweenSystems,
  //   props.fontSize,
  //   props.alignment,
  //   props.useDropCap,
  //   props.gabc,
  //   selectionInsertion,
  //   props.annotation,
  //   props.width,
  //   props.height,
  //   onRenderComplete
  // ]);

  // const visiblePages = typeof props.pageNum === "number" ? 1 : pageCount;

  const divs = (score.pages || []).map((page, i) => (
    <div
      key={i}
      id={props.id && props.id + "-" + i}
      className={`Exsurge ${props.className || ""}`}
      style={props.style}
      contentEditable={props.contentEditable}
      onKeyDown={props.onKeyDown}
    >
      {page.createReact(ctxt, props.zoom)}
    </div>
  ));

  return <>{divs}</>;
};
