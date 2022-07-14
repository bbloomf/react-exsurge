"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _webfontloader = _interopRequireDefault(require("webfontloader"));

var exsurge = _interopRequireWildcard(require("exsurge"));

Object.keys(exsurge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === exsurge[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return exsurge[key];
    }
  });
});

var _usePrevious = _interopRequireDefault(require("../hooks/usePrevious"));

var _useArray = _interopRequireDefault(require("../hooks/useArray"));

var _getNotYetLoadedFonts = _interopRequireDefault(require("../utils/getNotYetLoadedFonts"));

var _resolveFont = _interopRequireDefault(require("../utils/resolveFont"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var createReactSvg = function createReactSvg(svgTree) {
  return typeof svgTree === "string" ? svgTree : _react.default.createElement.apply(_react.default, [svgTree.name || _react.default.Fragment, svgTree.props].concat(_toConsumableArray((svgTree.children || []).map(createReactSvg))));
};

var Exsurge = function Exsurge(_ref) {
  var _textStyles$supertitl, _textStyles$title, _textStyles$subtitle, _textStyles$leftRight, _textStyles$supertitl2, _textStyles$title2, _textStyles$subtitle2, _textStyles$leftRight2, _textStyles$annotatio, _textStyles$dropCap, _textStyles$al, _textStyles$choralSig, _textStyles$lyric, _textStyles$translati, _textStyles$supertitl3, _textStyles$title3, _textStyles$subtitle3, _textStyles$leftRight3, _textStyles$annotatio2, _textStyles$dropCap2, _textStyles$al2, _textStyles$choralSig2, _textStyles$lyric2, _textStyles$translati2, _textStyles$supertitl4, _textStyles$title4, _textStyles$subtitle4, _textStyles$leftRight4, _textStyles$annotatio3, _textStyles$dropCap3, _textStyles$al3, _textStyles$choralSig3, _textStyles$lyric3, _textStyles$translati3, _textStyles$supertitl5, _textStyles$title5, _textStyles$subtitle5;

  var gabc = _ref.gabc,
      _ref$useDropCap = _ref.useDropCap,
      useDropCap = _ref$useDropCap === void 0 ? true : _ref$useDropCap,
      _ref$annotation = _ref.annotation,
      annotation = _ref$annotation === void 0 ? [] : _ref$annotation,
      _ref$contentEditable = _ref.contentEditable,
      contentEditable = _ref$contentEditable === void 0 ? false : _ref$contentEditable,
      _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? "latin" : _ref$alignment,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? -1 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? -1 : _ref$height,
      zoom = _ref.zoom,
      selection = _ref.selection,
      id = _ref.id,
      style = _ref.style,
      className = _ref.className,
      svgClass = _ref.svgClass,
      supertitle = _ref.supertitle,
      title = _ref.title,
      subtitle = _ref.subtitle,
      textLeft = _ref.textLeft,
      textRight = _ref.textRight,
      _ref$defaultFont = _ref.defaultFont,
      defaultFont = _ref$defaultFont === void 0 ? "EB Garamond" : _ref$defaultFont,
      _ref$defaultColor = _ref.defaultColor,
      defaultColor = _ref$defaultColor === void 0 ? "#000000" : _ref$defaultColor,
      _ref$defaultTitleAlig = _ref.defaultTitleAlignment,
      defaultTitleAlignment = _ref$defaultTitleAlig === void 0 ? "center" : _ref$defaultTitleAlig,
      font = _ref.font,
      _ref$staffSize = _ref.staffSize,
      staffSize = _ref$staffSize === void 0 ? 37.5 : _ref$staffSize,
      _ref$baseFontSize = _ref.baseFontSize,
      baseFontSize = _ref$baseFontSize === void 0 ? staffSize * 19.2 / 37.5 : _ref$baseFontSize,
      _ref$interSyllabicSpa = _ref.interSyllabicSpacing,
      interSyllabicSpacing = _ref$interSyllabicSpa === void 0 ? 2.5 : _ref$interSyllabicSpa,
      _ref$spaceBetweenSyst = _ref.spaceBetweenSystems,
      spaceBetweenSystems = _ref$spaceBetweenSyst === void 0 ? 1.5 : _ref$spaceBetweenSyst,
      _ref$spaceAboveLyrics = _ref.spaceAboveLyrics,
      spaceAboveLyrics = _ref$spaceAboveLyrics === void 0 ? 0.75 : _ref$spaceAboveLyrics,
      _ref$textStyles = _ref.textStyles,
      textStyles = _ref$textStyles === void 0 ? {} : _ref$textStyles,
      onScoreUpdate = _ref.onScoreUpdate,
      onRender = _ref.onRender,
      onKeyDown = _ref.onKeyDown,
      mapAnnotationSpansToTextLeft = _ref.mapAnnotationSpansToTextLeft,
      contextCreated = _ref.contextCreated;
  var addSvgClass = (0, _react.useMemo)(function () {
    return svgClass ? function (node) {
      var props = node.props || (node.props = {});
      var propKey = 'class' in props ? 'class' : 'className';
      var classNamePrefix = props[propKey] ? props[propKey] + " " : "";
      props[propKey] = classNamePrefix + svgClass;
      return node;
    } : function (node) {
      return node;
    };
  }, [svgClass]);
  var supertitleSize = (_textStyles$supertitl = textStyles.supertitle) === null || _textStyles$supertitl === void 0 ? void 0 : _textStyles$supertitl.size;
  var titleSize = (_textStyles$title = textStyles.title) === null || _textStyles$title === void 0 ? void 0 : _textStyles$title.size;
  var subtitleSize = (_textStyles$subtitle = textStyles.subtitle) === null || _textStyles$subtitle === void 0 ? void 0 : _textStyles$subtitle.size;
  var leftRightSize = (_textStyles$leftRight = textStyles.leftRight) === null || _textStyles$leftRight === void 0 ? void 0 : _textStyles$leftRight.size;
  var annotationArray = (0, _useArray.default)(annotation instanceof Array ? annotation : [annotation]);
  var textFontsArray = (0, _useArray.default)([(_textStyles$supertitl2 = textStyles.supertitle) === null || _textStyles$supertitl2 === void 0 ? void 0 : _textStyles$supertitl2.font, (_textStyles$title2 = textStyles.title) === null || _textStyles$title2 === void 0 ? void 0 : _textStyles$title2.font, (_textStyles$subtitle2 = textStyles.subtitle) === null || _textStyles$subtitle2 === void 0 ? void 0 : _textStyles$subtitle2.font, (_textStyles$leftRight2 = textStyles.leftRight) === null || _textStyles$leftRight2 === void 0 ? void 0 : _textStyles$leftRight2.font, (_textStyles$annotatio = textStyles.annotation) === null || _textStyles$annotatio === void 0 ? void 0 : _textStyles$annotatio.font, (_textStyles$dropCap = textStyles.dropCap) === null || _textStyles$dropCap === void 0 ? void 0 : _textStyles$dropCap.font, (_textStyles$al = textStyles.al) === null || _textStyles$al === void 0 ? void 0 : _textStyles$al.font, (_textStyles$choralSig = textStyles.choralSign) === null || _textStyles$choralSig === void 0 ? void 0 : _textStyles$choralSig.font, (_textStyles$lyric = textStyles.lyric) === null || _textStyles$lyric === void 0 ? void 0 : _textStyles$lyric.font, (_textStyles$translati = textStyles.translation) === null || _textStyles$translati === void 0 ? void 0 : _textStyles$translati.font, font, defaultFont]);
  var textSizesArray = (0, _useArray.default)([(_textStyles$supertitl3 = textStyles.supertitle) === null || _textStyles$supertitl3 === void 0 ? void 0 : _textStyles$supertitl3.size, (_textStyles$title3 = textStyles.title) === null || _textStyles$title3 === void 0 ? void 0 : _textStyles$title3.size, (_textStyles$subtitle3 = textStyles.subtitle) === null || _textStyles$subtitle3 === void 0 ? void 0 : _textStyles$subtitle3.size, (_textStyles$leftRight3 = textStyles.leftRight) === null || _textStyles$leftRight3 === void 0 ? void 0 : _textStyles$leftRight3.size, (_textStyles$annotatio2 = textStyles.annotation) === null || _textStyles$annotatio2 === void 0 ? void 0 : _textStyles$annotatio2.size, (_textStyles$dropCap2 = textStyles.dropCap) === null || _textStyles$dropCap2 === void 0 ? void 0 : _textStyles$dropCap2.size, (_textStyles$al2 = textStyles.al) === null || _textStyles$al2 === void 0 ? void 0 : _textStyles$al2.size, (_textStyles$choralSig2 = textStyles.choralSign) === null || _textStyles$choralSig2 === void 0 ? void 0 : _textStyles$choralSig2.size, (_textStyles$lyric2 = textStyles.lyric) === null || _textStyles$lyric2 === void 0 ? void 0 : _textStyles$lyric2.size, (_textStyles$translati2 = textStyles.translation) === null || _textStyles$translati2 === void 0 ? void 0 : _textStyles$translati2.size]);
  var textColorsArray = (0, _useArray.default)([(_textStyles$supertitl4 = textStyles.supertitle) === null || _textStyles$supertitl4 === void 0 ? void 0 : _textStyles$supertitl4.color, (_textStyles$title4 = textStyles.title) === null || _textStyles$title4 === void 0 ? void 0 : _textStyles$title4.color, (_textStyles$subtitle4 = textStyles.subtitle) === null || _textStyles$subtitle4 === void 0 ? void 0 : _textStyles$subtitle4.color, (_textStyles$leftRight4 = textStyles.leftRight) === null || _textStyles$leftRight4 === void 0 ? void 0 : _textStyles$leftRight4.color, (_textStyles$annotatio3 = textStyles.annotation) === null || _textStyles$annotatio3 === void 0 ? void 0 : _textStyles$annotatio3.color, (_textStyles$dropCap3 = textStyles.dropCap) === null || _textStyles$dropCap3 === void 0 ? void 0 : _textStyles$dropCap3.color, (_textStyles$al3 = textStyles.al) === null || _textStyles$al3 === void 0 ? void 0 : _textStyles$al3.color, (_textStyles$choralSig3 = textStyles.choralSign) === null || _textStyles$choralSig3 === void 0 ? void 0 : _textStyles$choralSig3.color, (_textStyles$lyric3 = textStyles.lyric) === null || _textStyles$lyric3 === void 0 ? void 0 : _textStyles$lyric3.color, (_textStyles$translati3 = textStyles.translation) === null || _textStyles$translati3 === void 0 ? void 0 : _textStyles$translati3.color]);
  var titleAlignmentsArray = (0, _useArray.default)([(_textStyles$supertitl5 = textStyles.supertitle) === null || _textStyles$supertitl5 === void 0 ? void 0 : _textStyles$supertitl5.alignment, (_textStyles$title5 = textStyles.title) === null || _textStyles$title5 === void 0 ? void 0 : _textStyles$title5.alignment, (_textStyles$subtitle5 = textStyles.subtitle) === null || _textStyles$subtitle5 === void 0 ? void 0 : _textStyles$subtitle5.alignment]);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      setRenderCount = _useState2[1];

  var ctxtRef = (0, _react.useRef)();
  var headerLenRef = (0, _react.useRef)(0);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      fontLoaded = _useState4[0],
      setFontLoaded = _useState4[1];

  if (!ctxtRef.current) {
    var _ctxt = ctxtRef.current = new exsurge.ChantContext(exsurge.TextMeasuringStrategy.Canvas);

    _ctxt.specialCharProperties["font-family"] = "Versiculum";
    _ctxt.specialCharProperties["font-variant"] = "normal";
    _ctxt.specialCharProperties["font-weight"] = "400";

    var defaultSpecialCharText = _ctxt.specialCharText || function (char) {
      return char;
    };

    _ctxt.specialCharText = function (char) {
      return defaultSpecialCharText(char).toLowerCase();
    };

    _ctxt.textAfterSpecialChar = "";
    _ctxt.autoColor = false;

    _ctxt.setRubricColor("");

    _ctxt.minSpaceAboveStaff = 0;
    _ctxt.editable = !!contentEditable;
    _ctxt.useExtraTextOnly = !contentEditable;
    contextCreated === null || contextCreated === void 0 ? void 0 : contextCreated(_ctxt);
  }

  var ctxt = ctxtRef.current;
  (0, _react.useEffect)(function () {
    if (typeof mapAnnotationSpansToTextLeft === 'function') {
      ctxt.mapAnnotationSpansToTextLeft = mapAnnotationSpansToTextLeft;
    }
  }, [ctxt, mapAnnotationSpansToTextLeft]);
  var handleScoreUpdate = (0, _react.useCallback)(function (score, gabcHeaderLen) {
    return onScoreUpdate === null || onScoreUpdate === void 0 ? void 0 : onScoreUpdate(score, gabcHeaderLen);
  }, [onScoreUpdate]);
  var scoreRef = (0, _react.useRef)();

  function getScore() {
    if (!scoreRef.current) scoreRef.current = new exsurge.ChantScore(ctxt);
    return scoreRef.current;
  }

  var score = getScore();

  if (process.env.NODE_ENV === "development") {// DEBUG: window.$score = score;
  } // load font.  Right now we use Google, but webfontloader supports
  // • edgewebfonts.adobe.com
  // • Fontdeck.com
  // • Fonts.com
  // • Typekit.com


  var loadedFontsRef = (0, _react.useRef)({});
  (0, _react.useEffect)(function () {
    // TODO...keep track of whether Bold, Italic, etc. are needed, and load them as necessary
    // first calculate which distinct fonts we need:
    var loadedFonts = loadedFontsRef.current,
        fontsUsedButNotLoaded = new Set((0, _getNotYetLoadedFonts.default)(textFontsArray, loadedFonts)),
        families = Array.from(fontsUsedButNotLoaded).map(function (font) {
      return "".concat(font, ":400,400i,700,700i");
    });

    if (families.length) {
      setFontLoaded(false);

      _webfontloader.default.load({
        google: {
          families: families
        },
        classes: false,
        fontactive: function fontactive(familyName, fvd) {
          if (fvd === "n4") {
            loadedFonts[familyName] = true;
            if ((0, _getNotYetLoadedFonts.default)(textFontsArray, loadedFonts).length === 0) // all required fonts have been loaded:
              setFontLoaded(true);
          }
        },
        fontinactive: function fontinactive(familyName, fvd) {
          if (fvd === "n4") {
            loadedFonts[familyName] = false;
          }
        }
      });
    }
  }, [textFontsArray]);
  var resolveLocalFont = (0, _react.useCallback)(function (newFont) {
    return (0, _resolveFont.default)(loadedFontsRef.current, newFont, font, defaultFont);
  }, [font, defaultFont]); // Set fonts, sizes, and colors:

  (0, _react.useEffect)(function () {
    var _textStyles$lyric4;

    // don't set the fonts if they haven't yet loaded:
    if ((0, _getNotYetLoadedFonts.default)(textFontsArray, loadedFontsRef.current).length > 0) return;
    var interSyllabicMultiplier = interSyllabicSpacing;
    ctxt.setStaffHeight(staffSize);
    ctxt.interSyllabicMultiplier = interSyllabicMultiplier;
    ctxt.interVerbalMultiplier = interSyllabicMultiplier * 0.25;
    ctxt.spaceBetweenSystems = spaceBetweenSystems;
    ctxt.minSpaceBelowStaff = spaceAboveLyrics;
    ctxt.setFont(resolveLocalFont((_textStyles$lyric4 = textStyles.lyric) === null || _textStyles$lyric4 === void 0 ? void 0 : _textStyles$lyric4.font), baseFontSize);

    for (var _i2 = 0, _Object$entries = Object.entries(exsurge.TextTypes); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          k = _Object$entries$_i[0],
          textType = _Object$entries$_i[1];

      // Is there a better way to do type assertion than this?
      var key = k;
      var textStyle = textStyles[key] || {}; // font

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
  (0, _react.useEffect)(function () {
    score.useDropCap = useDropCap;
    score.recreateDropCap(ctxt);
    score.forceLayout = true;
    handleScoreUpdate(score, headerLenRef.current);
  }, [useDropCap, score, ctxt, handleScoreUpdate]);
  var insertion = selection && selection.element && selection.element.insertion;
  var selectionInsertion = insertion ? typeof insertion.afterElementIndex === "number" ? insertion.afterElementIndex : -1 - (insertion.chantLine || -1) : undefined;
  var previousSelectionInsertion = (0, _usePrevious.default)(selectionInsertion);
  var elementSelection = selection && selection.element || null;
  (0, _react.useEffect)(function () {
    headerLenRef.current = exsurge.Gabc.updateMappingsFromSource(ctxt, score.mappings, gabc, selectionInsertion, previousSelectionInsertion);
    score.updateNotations(ctxt);
    handleScoreUpdate(score, headerLenRef.current);
  }, [gabc, selectionInsertion, ctxt, score, handleScoreUpdate]);
  (0, _react.useEffect)(function () {
    score.annotation = annotationArray.length ? _construct(exsurge.Annotations, [ctxt].concat(_toConsumableArray(annotationArray))) : null;
    handleScoreUpdate(score, headerLenRef.current);
  }, [annotationArray, ctxt, score, handleScoreUpdate]); // title effects:

  (0, _react.useEffect)(function () {
    score.titles.setSupertitle(ctxt, supertitle);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, supertitle, supertitleSize, handleScoreUpdate]);
  (0, _react.useEffect)(function () {
    score.titles.setTitle(ctxt, title);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, title, titleSize, handleScoreUpdate]);
  (0, _react.useEffect)(function () {
    score.titles.setSubtitle(ctxt, subtitle);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, subtitle, subtitleSize, handleScoreUpdate]);
  (0, _react.useEffect)(function () {
    score.titles.setTextLeft(ctxt, textLeft);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, textLeft, leftRightSize, handleScoreUpdate]);
  (0, _react.useEffect)(function () {
    score.titles.setTextRight(ctxt, textRight);
    handleScoreUpdate(score, headerLenRef.current);
  }, [score, ctxt, textRight, leftRightSize, handleScoreUpdate]);
  (0, _react.useEffect)(function () {
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

  (0, _react.useEffect)(function () {
    if (!fontLoaded) return;
    score.layoutChantLines(ctxt, width);

    if (height > 0) {
      score.paginate(height); // setPageCount(score.pages.length);
    }

    setRenderCount(function (count) {
      return count + 1;
    });
    onRender === null || onRender === void 0 ? void 0 : onRender();
  }, [score, ctxt, fontLoaded, onRender, textFontsArray, textSizesArray, textColorsArray, titleAlignmentsArray, supertitle, title, subtitle, textLeft, textRight, staffSize, interSyllabicSpacing, spaceBetweenSystems, baseFontSize, alignment, useDropCap, gabc, selectionInsertion, annotationArray, width, height, handleScoreUpdate]); // selection:

  (0, _react.useEffect)(function () {
    var newSelection = {};
    if (elementSelection) newSelection.element = elementSelection;
    score.updateSelection(newSelection);
    setRenderCount(function (count) {
      return count + 1;
    });
  }, [score, ctxt, elementSelection]);
  var divs = (score.pages || []).map(function (page, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      id: id && id + "-" + i,
      className: "Exsurge ".concat(className || ""),
      style: style,
      onKeyDown: onKeyDown
    }, createReactSvg(addSvgClass(page.createSvgTree(ctxt, zoom))));
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, divs);
};

Exsurge.propTypes = {
  useDropCap: _propTypes.default.bool,
  annotation: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  contentEditable: _propTypes.default.bool,
  alignment: _propTypes.default.oneOf(["english", "latin"]),
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  zoom: _propTypes.default.number,
  id: _propTypes.default.string,
  style: _propTypes.default.any,
  className: _propTypes.default.string,
  svgClass: _propTypes.default.string,
  supertitle: _propTypes.default.string,
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  textLeft: _propTypes.default.string,
  textRight: _propTypes.default.string,
  defaultFont: _propTypes.default.string,
  defaultColor: _propTypes.default.string,
  defaultTitleAlignment: _propTypes.default.string,
  font: _propTypes.default.string,
  baseFontSize: _propTypes.default.number,
  staffSize: _propTypes.default.number,
  interSyllabicSpacing: _propTypes.default.number,
  spaceBetweenSystems: _propTypes.default.number,
  spaceAboveLyrics: _propTypes.default.number
};
var _default = Exsurge;
exports.default = _default;
//# sourceMappingURL=Exsurge.js.map