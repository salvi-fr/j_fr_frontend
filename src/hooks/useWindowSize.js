import React, { useCallback, useEffect } from "react";
import { debounce } from "lodash";
import { useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(null);

  const windowListener = useCallback(
    debounce(() => {
      if (window) setWidth(window.innerWidth);
    }, 250),
    []
  );

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      window.addEventListener("resize", windowListener);
    }
    return () => window.removeEventListener("resize", windowListener);
  }, []);

  return width;
};

export default useWindowSize;
