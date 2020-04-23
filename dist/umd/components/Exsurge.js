(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "exsurge", "prop-types", "react", "webfontloader", "../hooks/usePrevious", "../hooks/useArray", "../utils/getNotYetLoadedFonts", "../utils/resolveFont"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("exsurge"), require("prop-types"), require("react"), require("webfontloader"), require("../hooks/usePrevious"), require("../hooks/useArray"), require("../utils/getNotYetLoadedFonts"), require("../utils/resolveFont"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.exsurge, global.propTypes, global.react, global.webfontloader, global.usePrevious, global.useArray, global.getNotYetLoadedFonts, global.resolveFont);
    global.undefined = mod.exports;
  }
})(this, function (exports, _exsurge, _propTypes, _react, _webfontloader, _usePrevious, _useArray, _getNotYetLoadedFonts, _resolveFont) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_exsurge).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _exsurge[key];
      }
    });
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _webfontloader2 = _interopRequireDefault(_webfontloader);

  var exsurge = _interopRequireWildcard(_exsurge);

  var _usePrevious2 = _interopRequireDefault(_usePrevious);

  var _useArray2 = _interopRequireDefault(_useArray);

  var _getNotYetLoadedFonts2 = _interopRequireDefault(_getNotYetLoadedFonts);

  var _resolveFont2 = _interopRequireDefault(_resolveFont);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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
    const annotationArray = (0, _useArray2.default)(annotation instanceof Array ? annotation : [annotation]);
    const textFontsArray = (0, _useArray2.default)([textStyles.supertitle?.font, textStyles.title?.font, textStyles.subtitle?.font, textStyles.leftRight?.font, textStyles.annotation?.font, textStyles.dropCap?.font, textStyles.al?.font, textStyles.choralSign?.font, textStyles.lyric?.font, textStyles.translation?.font, font, defaultFont]);
    const textSizesArray = (0, _useArray2.default)([textStyles.supertitle?.size, textStyles.title?.size, textStyles.subtitle?.size, textStyles.leftRight?.size, textStyles.annotation?.size, textStyles.dropCap?.size, textStyles.al?.size, textStyles.choralSign?.size, textStyles.lyric?.size, textStyles.translation?.size]);
    const textColorsArray = (0, _useArray2.default)([textStyles.supertitle?.color, textStyles.title?.color, textStyles.subtitle?.color, textStyles.leftRight?.color, textStyles.annotation?.color, textStyles.dropCap?.color, textStyles.al?.color, textStyles.choralSign?.color, textStyles.lyric?.color, textStyles.translation?.color]);
    const titleAlignmentsArray = (0, _useArray2.default)([textStyles.supertitle?.alignment, textStyles.title?.alignment, textStyles.subtitle?.alignment]);
    const [, setRenderCount] = (0, _react.useState)(0);
    const ctxtRef = (0, _react.useRef)();
    const headerLenRef = (0, _react.useRef)(0);
    const [fontLoaded, setFontLoaded] = (0, _react.useState)(false);

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
    const handleScoreUpdate = (0, _react.useCallback)((score, gabcHeaderLen) => {
      if (typeof onScoreUpdate === "function") onScoreUpdate(score, gabcHeaderLen);
    }, [onScoreUpdate]);
    const scoreRef = (0, _react.useRef)();

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


    const loadedFontsRef = (0, _react.useRef)({});
    (0, _react.useEffect)(() => {
      // TODO...keep track of whether Bold, Italic, etc. are needed, and load them as necessary
      // first calculate which distinct fonts we need:
      const loadedFonts = loadedFontsRef.current,
            fontsUsedButNotLoaded = new Set((0, _getNotYetLoadedFonts2.default)(textFontsArray, loadedFonts)),
            families = Array.from(fontsUsedButNotLoaded).map(font => `${font}:400,400i,700,700i`);

      if (families.length) {
        setFontLoaded(false);

        _webfontloader2.default.load({
          google: {
            families
          },
          classes: false,
          fontactive: (familyName, fvd) => {
            if (fvd === "n4") {
              loadedFonts[familyName] = true;
              if ((0, _getNotYetLoadedFonts2.default)(textFontsArray, loadedFonts).length === 0) // all required fonts have been loaded:
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
    const resolveLocalFont = (0, _react.useCallback)(newFont => (0, _resolveFont2.default)(loadedFontsRef.current, newFont, font, defaultFont), [font, defaultFont]); // Set fonts, sizes, and colors:

    (0, _react.useEffect)(() => {
      // don't set the fonts if they haven't yet loaded:
      if ((0, _getNotYetLoadedFonts2.default)(textFontsArray, loadedFontsRef.current).length > 0) return;
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
    (0, _react.useEffect)(() => {
      score.useDropCap = useDropCap;
      score.recreateDropCap(ctxt);
      score.forceLayout = true;
      handleScoreUpdate(score, headerLenRef.current);
    }, [useDropCap, score, ctxt, handleScoreUpdate]);
    const insertion = selection && selection.element && selection.element.insertion;
    const selectionInsertion = insertion ? typeof insertion.afterElementIndex === "number" ? insertion.afterElementIndex : -1 - (insertion.chantLine || -1) : undefined;
    const previousSelectionInsertion = (0, _usePrevious2.default)(selectionInsertion);
    const elementSelection = selection && selection.element || null;
    (0, _react.useEffect)(() => {
      headerLenRef.current = exsurge.Gabc.updateMappingsFromSource(ctxt, score.mappings, gabc, selectionInsertion, previousSelectionInsertion);
      score.updateNotations(ctxt);
      handleScoreUpdate(score, headerLenRef.current);
    }, [gabc, selectionInsertion, ctxt, score, handleScoreUpdate]);
    (0, _react.useEffect)(() => {
      score.annotation = annotationArray.length ? new exsurge.Annotations(ctxt, ...annotationArray) : null;
      handleScoreUpdate(score, headerLenRef.current);
    }, [annotationArray, ctxt, score, handleScoreUpdate]); // title effects:

    (0, _react.useEffect)(() => {
      score.titles.setSupertitle(ctxt, supertitle);
      handleScoreUpdate(score, headerLenRef.current);
    }, [score, ctxt, supertitle, supertitleSize, handleScoreUpdate]);
    (0, _react.useEffect)(() => {
      score.titles.setTitle(ctxt, title);
      handleScoreUpdate(score, headerLenRef.current);
    }, [score, ctxt, title, titleSize, handleScoreUpdate]);
    (0, _react.useEffect)(() => {
      score.titles.setSubtitle(ctxt, subtitle);
      handleScoreUpdate(score, headerLenRef.current);
    }, [score, ctxt, subtitle, subtitleSize, handleScoreUpdate]);
    (0, _react.useEffect)(() => {
      score.titles.setTextLeft(ctxt, textLeft);
      handleScoreUpdate(score, headerLenRef.current);
    }, [score, ctxt, textLeft, leftRightSize, handleScoreUpdate]);
    (0, _react.useEffect)(() => {
      score.titles.setTextRight(ctxt, textRight);
      handleScoreUpdate(score, headerLenRef.current);
    }, [score, ctxt, textRight, leftRightSize, handleScoreUpdate]);
    (0, _react.useEffect)(() => {
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

    (0, _react.useEffect)(() => {
      if (!fontLoaded) return;
      score.layoutChantLines(ctxt, width);

      if (height > 0) {
        score.paginate(height); // setPageCount(score.pages.length);
      }

      setRenderCount(count => count + 1);
    }, [score, ctxt, fontLoaded, textFontsArray, textSizesArray, textColorsArray, titleAlignmentsArray, supertitle, title, subtitle, textLeft, textRight, staffSize, interSyllabicSpacing, spaceBetweenSystems, baseFontSize, alignment, useDropCap, gabc, selectionInsertion, annotationArray, width, height, handleScoreUpdate]); // selection:

    (0, _react.useEffect)(() => {
      let newSelection = {};
      if (elementSelection) newSelection.element = elementSelection;
      score.updateSelection(newSelection);
      setRenderCount(count => count + 1);
    }, [score, ctxt, elementSelection]);

    const createReactSvg = svgTree => typeof svgTree === "string" ? svgTree : _react2.default.createElement(svgTree.name || _react2.default.Fragment, svgTree.props, ...(svgTree.children || []).map(createReactSvg));

    const divs = (score.pages || []).map((page, i) => /*#__PURE__*/_react2.default.createElement("div", {
      key: i,
      id: id && id + "-" + i,
      className: `Exsurge ${className || ""}`,
      style: style,
      contentEditable: contentEditable,
      onKeyDown: onKeyDown
    }, createReactSvg(page.createSvgTree(ctxt, zoom))));
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, divs);
  };

  Exsurge.propTypes = {
    gabc: _propTypes2.default.string.isRequired,
    useDropCap: _propTypes2.default.bool,
    annotation: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    contentEditable: _propTypes2.default.bool,
    alignment: _propTypes2.default.oneOf(["english", "latin"]),
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    zoom: _propTypes2.default.number,
    id: _propTypes2.default.string,
    style: _propTypes2.default.any,
    className: _propTypes2.default.string,
    supertitle: _propTypes2.default.string,
    title: _propTypes2.default.string,
    subtitle: _propTypes2.default.string,
    textLeft: _propTypes2.default.string,
    textRight: _propTypes2.default.string,
    defaultFont: _propTypes2.default.string,
    defaultColor: _propTypes2.default.string,
    defaultTitleAlignment: _propTypes2.default.string,
    font: _propTypes2.default.string,
    baseFontSize: _propTypes2.default.number,
    staffSize: _propTypes2.default.number,
    interSyllabicSpacing: _propTypes2.default.number,
    spaceBetweenSystems: _propTypes2.default.number,
    spaceAboveLyrics: _propTypes2.default.number
  };
  exports.default = Exsurge;
});
//# sourceMappingURL=Exsurge.js.map