import { useEffect, useState } from "react";

export const useRefDimensions = (ref: any) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  const ro = new ResizeObserver((entries) => {
    for (let entry of entries) {
      setDimensions({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    }
  });

  useEffect(() => {
    if (ref.current) {
      ro.observe(ref.current);
    }
  }, [ref]);
  return dimensions;
};
