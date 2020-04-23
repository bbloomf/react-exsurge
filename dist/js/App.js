"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var _Exsurge = _interopRequireDefault(require("./components/Exsurge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Edit ", /*#__PURE__*/_react.default.createElement("code", null, "src/App.tsx"), " and save to reload."), /*#__PURE__*/_react.default.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React")), /*#__PURE__*/_react.default.createElement(_Exsurge.default, {
    gabc: "(c4) Jest(d)ingqwqw(ddd.) (::)",
    staffSize: 100,
    annotation: ["I", "II", "Test"],
    width: 750,
    useDropCap: true,
    alignment: "english",
    font: "EB Garamond",
    defaultColor: "#000",
    supertitle: "top",
    title: "<i>Exsurge",
    subtitle: "bot",
    textLeft: "<c><sc><b>left</b></sc></c>",
    textRight: "<sc>right</sc>",
    textStyles: {
      annotation: {
        font: "EB Garamond",
        size: 0.8
      },
      dropCap: {
        size: 0.75,
        color: "#000"
      },
      lyric: {
        color: "#000"
      }
    }
  }));
}

var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map