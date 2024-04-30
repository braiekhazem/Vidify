import React, { useEffect, useRef, useState } from "react";
import { SpeedProps } from "./@types";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import classNames from "classnames";
import { concatPrefixCls } from "./../../utils/concatPrefixCls";
import useWindowSize from "@src/hooks/useWindowSize";

const Speed: React.FC<SpeedProps> = (props) => {
  const { className } = props;
  // onClick, onChange
  const { width, height } = useWindowSize();
  const speedTooltipRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  const prefixCls = getPrefixCls("speed-button");

  const classes = classNames(prefixCls, className);

  useEffect(() => {
    if (speedTooltipRef.current && buttonRef.current) {
      const { x, y } = buttonRef.current.getClientRects().item(0) as any;

      speedTooltipRef.current.style.left = x + "px";
      speedTooltipRef.current.style.top = y + "px";

      window.document.body.insertBefore(
        speedTooltipRef.current,
        window.document.body.firstChild
      );
    }
  }, [speedTooltipRef, buttonRef, width, height]);

  return (
    <div className={classes} ref={buttonRef} onClick={() => setOpen(!open)}>
      <div
        className={concatPrefixCls(prefixCls, "speed-list")}
        ref={speedTooltipRef}
        style={{ opacity: open ? "1" : "0" }}
      >
        <span>0.25x</span>
        <span>0.5x</span>
        <span>0.75x</span>
        <span>1x</span>
        <span>1.25x</span>
        <span>1.5x</span>
        <span>1.75x</span>
        <span>2x</span>
      </div>
      1x
    </div>
  );
};

export default Speed;
