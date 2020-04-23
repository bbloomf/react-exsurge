import React, { useRef } from "react";

const useStringArray = value => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef(value); // update the array reference only if the string values are different:

  if (value.join("|") !== ref.current.join("|")) {
    ref.current = value;
  }

  return ref.current;
};

export default useStringArray;
//# sourceMappingURL=useStringArray.js.map