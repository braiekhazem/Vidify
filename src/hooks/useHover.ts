import { useCallback, useMemo, useState } from "react";

type UseHoverReturn = [
  boolean,
  {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  },
];

const useHover = (): UseHoverReturn => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const eventHandlers = useMemo(
    () => ({
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    }),
    [handleMouseEnter, handleMouseLeave]
  );

  return [hovered, eventHandlers];
};

export default useHover;
