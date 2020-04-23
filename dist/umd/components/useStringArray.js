(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const useStringArray = value => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = (0, _react.useRef)(value); // update the array reference only if the string values are different:

    if (value.join("|") !== ref.current.join("|")) {
      ref.current = value;
    }

    return ref.current;
  };

  exports.default = useStringArray;
});
//# sourceMappingURL=useStringArray.js.map