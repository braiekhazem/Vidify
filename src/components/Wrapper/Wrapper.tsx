import React, { useEffect, useRef, useState } from "react";
import { WrapperProps } from "./@types";
import classNames from "classnames";
import { concatPrefixCls } from "./../../utils/concatPrefixCls";
import { ReactComponent as SpinnerSVG } from "../../global/assets/icons/loading/spinner.svg";

const Wrapper: React.FC<WrapperProps> = (props) => {
  const {
    children,
    prefixCls,
    className,
    onClick,
    playing,
    videoState: { loadingData },
    controlBarElement,
    ...rest
  } = props;

  const [hide, setHide] = useState<boolean>(false);
  const [forceCancel, setForceCancel] = useState<boolean>(false);
  const classes = classNames(className, {
    [`${prefixCls}-hidden`]: playing && hide,
  });

  const videoRef = useRef<HTMLDivElement>(null);

  let timeoutId: NodeJS.Timeout | null = null;

  const manageMenuPreview = () => {
    timeoutId = setInterval(() => {
      if (playing && !forceCancel) setHide(true);
    }, 5000);

    if (!playing) {
      setHide(false);
      clearInterval(timeoutId);
    }
  };

  const handleMouseMove = () => setHide(false);

  useEffect(() => {
    manageMenuPreview();

    return () => {
      timeoutId && clearInterval(timeoutId);
    };
  }, [playing, forceCancel]);

  useEffect(() => {
    if (controlBarElement) {
      controlBarElement?.addEventListener("mouseenter", () => {
        setForceCancel(true);
      });
      controlBarElement?.addEventListener("mouseleave", () => {
        setForceCancel(false);
      });
    }
  }, [controlBarElement]);

  return (
    <div
      {...rest}
      className={classes}
      ref={videoRef}
      onMouseLeave={() => timeoutId && clearInterval(timeoutId)}
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
