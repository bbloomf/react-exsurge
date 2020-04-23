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

  /**
   * ensure that an array has the same reference as last time, whenever its contents are the same as last time
   * JSON.stringify is currently used to compare the values; this could be improved, but I'm mostly using it for string arrays,
   * so I don't think it would improve performance very much to use a more efficient method of checking equality
   * @param value the array
   */
  const useArray = value => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = (0, _react.useRef)(value); // update the array reference only if the string values are different:

    if (JSON.stringify(value) !== JSON.stringify(ref.current)) {
      ref.current = value;
    }

    return ref.current;
  };

  exports.default = useArray;
});
//# sourceMappingURL=useArray.js.map