import React, { forwardRef, useEffect, useRef, useState } from "react";
import { WrapperProps } from "./@types";
import classNames from "classnames";
import { concatPrefixCls } from "./../../utils/concatPrefixCls";
import { ReactComponent as SpinnerSVG } from "../../global/assets/icons/loading/spinner.svg";
import { useRefDimensions } from "../../hooks/useRefDimensions";
import SettingsDropdown from "../SettingsDropdown";
import Dropdown from "@src/common/Dropdown/Dropdown";
import mergeRefs from "@src/utils/mergeRefs";

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
    actions,
    currentVideoRef,
    playing,
    videoState,
    customLoader,
    controlBarElement,
    ...rest
  } = props;

  const { loadingData } = videoState;

  const { width, height } = useRefDimensions(currentVideoRef);
  const [hide, setHide] = useState<boolean>(false);
  const [forceCancel, setForceCancel] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef<any>(null);

  const classes = classNames(className, {
    [`${prefixCls}-hidden`]: playing && hide,
    [`${prefixCls}-small`]: width <= small,
    [`${prefixCls}-x-small`]: width <= xSmall,
    [`${prefixCls}-max-small`]: width <= maxSmall,
    [`${prefixCls}-medium`]: width <= medium,
    [`${prefixCls}-500`]: width <= 500,
    [`${prefixCls}-400`]: width <= 400,
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

  const handleContextMenu = (event: any) => {
    event.preventDefault();

    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const relativeX = event.clientX - containerRect.left;
      const relativeY = event.clientY - containerRect.top;

      setCursorPosition({ x: relativeX, y: relativeY });
      setShowMenu(true);
    }
  };

  const handleClick = (e: any) => {
    onClick && onClick(e);
    setShowMenu(false);
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

  console.log({ showMenu, cursorPosition });

  return (
    <div
      {...rest}
      className={classes}
      ref={mergeRefs(ref, containerRef)}
      onMouseLeave={() => timeoutId && clearInterval(timeoutId)}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <SettingsDropdown
        videoState={videoState}
        actions={videoState.actions}
        currentVideoRef={currentVideoRef.current}
        videoWidth={width + height}
      />
      <Dropdown
        open={showMenu}
        onOpenChange={(open) => setShowMenu(open)}
        placement={{
          top: cursorPosition.y + "px",
          left: cursorPosition.x + "px",
        }}
      >
        context menu
      </Dropdown>
      {loadingData && (
        <div
          className={`${concatPrefixCls(prefixCls, "loading-icon")} vf-center`}
        >
          {customLoader ? (
            customLoader
          ) : (
            <SpinnerSVG width={60} height={60} color="#fff" />
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default forwardRef<HTMLDivElement, WrapperProps>(Wrapper);
