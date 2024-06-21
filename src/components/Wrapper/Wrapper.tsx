import React, { forwardRef, useEffect, useRef, useState } from "react";
import { ContextMenuProps, WrapperProps, itemMenu } from "./@types";
import classNames from "classnames";
import { concatPrefixCls } from "./../../utils/concatPrefixCls";
import { ReactComponent as SpinnerSVG } from "../../global/assets/icons/loading/spinner.svg";
import { ReactComponent as KeyboardSVG } from "../../global/assets/icons/settings/keyboard.svg";
import { useRefDimensions } from "../../hooks/useRefDimensions";
import SettingsDropdown from "../SettingsDropdown";
import Dropdown from "@src/common/Dropdown/Dropdown";
import mergeRefs from "@src/utils/mergeRefs";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import ShortCutModal from "../Modals/ShortCutModal";
import FilterModal from "../Modals/FilterModal";

const small = 500;
const xSmall = 400;
const maxSmall = 350;
const medium = 630;

export const DEFAULT_CONTEXT_MENU_ITEMS: itemMenu[] = [
  {
    label: "custom1",
    icon: "icon",
    onClick: () => {
      console.log("click");
    },
    className: "test",
    link: "https://app.tamtasks.com/spaces/list/12816998-0ef7-421d-8658-0b2ff3ad0daa",
  },
  {
    label: "custom2",
    icon: "icon",
    onClick: () => {
      console.log("click");
    },
    className: "test",
  },
  {
    label: "custom3",
    icon: "icon",
    onClick: () => {
      console.log("click");
    },
    className: "test2",
  },
];

const InternalContextMenu: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ContextMenuProps
> = (props, ref) => {
  const {
    videoState,
    className,
    onClick,
    style = {},
    closeMenu,
    items = DEFAULT_CONTEXT_MENU_ITEMS,
  } = props;
  const prefixCls = getPrefixCls("context-menu");
  const classes = classNames(prefixCls, className);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick?.();
  };

  const keyBoardItem: itemMenu = {
    label: "keyboard",
    icon: <KeyboardSVG />,
    onClick: () =>
      videoState.actions?.togglekeyboardModal(!videoState.keyboardOpened),
  };

  return (
    <div
      className={classes}
      style={{ width: 200, ...style }}
      onClick={onClickHandler}
      ref={ref}
    >
      {[...items, keyBoardItem]?.map((item, index) => {
        const { icon, label, link, className, style, onClick } = item;

        return (
          <div
            className={`${concatPrefixCls(prefixCls, "item")} ${className}`}
            onClick={(e) => {
              onClick?.(e);
              closeMenu();
              if (link) window.open(link, "_blank");
            }}
            key={index}
            style={style}
          >
            {icon && (
              <div className={concatPrefixCls(prefixCls, "item-icon")}>
                {icon}
              </div>
            )}
            {label && (
              <div className={concatPrefixCls(prefixCls, "item-label")}>
                {label}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const ContextMenu = React.forwardRef<HTMLDivElement, ContextMenuProps>(
  InternalContextMenu
);

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
    contextMenu,
    enableContextMenu,
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
    if (containerRef.current && enableContextMenu) {
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
      <Dropdown
        open={showMenu}
        onOpenChange={(open) => setShowMenu(open)}
        placement={{
          top: cursorPosition.y,
          left: cursorPosition.x,
        }}
      >
        <ContextMenu
          videoState={videoState}
          closeMenu={() => setShowMenu(false)}
          items={contextMenu}
        />
      </Dropdown>
      <SettingsDropdown
        videoState={videoState}
        actions={videoState.actions}
        currentVideoRef={currentVideoRef.current}
        videoWidth={width + height}
      />

      <ShortCutModal
        videoState={videoState}
        toggleModal={(open) => videoState.actions?.togglekeyboardModal(open)}
      />
      <FilterModal
        videoState={videoState}
        currentVideoRef={currentVideoRef.current}
      />
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
