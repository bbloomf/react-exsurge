(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./logo.svg", "./components/Exsurge", "./App.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./logo.svg"), require("./components/Exsurge"), require("./App.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.logo, global.Exsurge, global.App);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _logo, _Exsurge) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _logo2 = _interopRequireDefault(_logo);

  var _Exsurge2 = _interopRequireDefault(_Exsurge);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function App() {
    return /*#__PURE__*/_react2.default.createElement("div", {
      className: "App"
    }, /*#__PURE__*/_react2.default.createElement("header", {
      className: "App-header"
    }, /*#__PURE__*/_react2.default.createElement("img", {
      src: _logo2.default,
      className: "App-logo",
      alt: "logo"
    }), /*#__PURE__*/_react2.default.createElement("p", null, "Edit ", /*#__PURE__*/_react2.default.createElement("code", null, "src/App.tsx"), " and save to reload."), /*#__PURE__*/_react2.default.createElement("a", {
      className: "App-link",
      href: "https://reactjs.org",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Learn React")), /*#__PURE__*/_react2.default.createElement(_Exsurge2.default, {
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

  exports.default = App;
});
//# sourceMappingURL=App.js.map