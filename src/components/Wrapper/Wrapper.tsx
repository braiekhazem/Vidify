import React, { useRef, useState } from "react";
import { WrapperProps } from "./@types";
import classNames from "classnames";
import { concatPrefixCls } from "@src/utils/concatPrefixCls";
import { ReactComponent as SpinnerSVG } from "../../global/assets/icons/loading/spinner.svg";

const Wrapper: React.FC<WrapperProps> = (props) => {
  const {
    children,
    prefixCls,
    className,
    onClick,
    playing,
    videoState: { loadingData },
    ...rest
  } = props;

  const [longHover, setLongHover] = useState<boolean>(true);
  const classes = classNames(className, {
    [`${prefixCls}-hidden`]: playing && !longHover,
  });

  const videoRef = useRef<HTMLDivElement>(null);
  let timeout: any;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setLongHover(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setLongHover(false);
    }, 10000);
  };

  const handleMouseMove = () => {
    if (!longHover) {
      setLongHover(true);
      handleMouseLeave();
      clearTimeout(timeout);
    }
  };

  return (
    <div
      {...rest}
      className={classes}
      ref={videoRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {loadingData && (
        <div
          className={`${concatPrefixCls(prefixCls, "loading-icon")} vf-center`}
        >
          <SpinnerSVG width={60} height={60} color="#fff" />
        </div>
      )}
      {children}
    </div>
  );
};

export default Wrapper;
