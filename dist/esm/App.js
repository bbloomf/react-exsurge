import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Exsurge from "./components/Exsurge";

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/React.createElement("p", null, "Edit ", /*#__PURE__*/React.createElement("code", null, "src/App.tsx"), " and save to reload."), /*#__PURE__*/React.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React")), /*#__PURE__*/React.createElement(Exsurge, {
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

export default App;
//# sourceMappingURL=App.js.map