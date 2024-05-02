import React, { forwardRef, useEffect, useState } from "react";
import { WrapperProps } from "./@types";
import classNames from "classnames";
import { concatPrefixCls } from "./../../utils/concatPrefixCls";
import { ReactComponent as SpinnerSVG } from "../../global/assets/icons/loading/spinner.svg";
import { useRefDimensions } from "../../hooks/useRefDimensions";

const small = 500;
const xSmall = 400;
const maxSmall = 350;
const medium = 630;

const Wrapper: React.ForwardRefRenderFunction<HTMLDivElement, WrapperProps> = (
  props,
  ref
) => {
  const {
    children,
    prefixCls,
    className,
    onClick,
    currentVideoRef,
    playing,
    videoState: { loadingData },
    controlBarElement,
    ...rest
  } = props;

  const { width } = useRefDimensions(currentVideoRef);
  const [hide, setHide] = useState<boolean>(false);
  const [forceCancel, setForceCancel] = useState<boolean>(false);

  const classes = classNames(className, {
    [`${prefixCls}-hidden`]: playing && hide,
    [`${prefixCls}-small`]: width <= small,
    [`${prefixCls}-x-small`]: width <= xSmall,
    [`${prefixCls}-max-small`]: width <= maxSmall,
    [`${prefixCls}-medium`]: width <= medium,
  });

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
      ref={ref}
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

export default forwardRef<HTMLDivElement, WrapperProps>(Wrapper);
