import { getPrefixCls } from "@src/utils/getPrefixCls";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { DropdownProps } from "./@types";
import mergeRefs from "@src/utils/mergeRefs";

const Dropdown = React.forwardRef<HTMLElement, DropdownProps>((props, ref) => {
  const {
    className,
    children,
    open = false,
    placement = {},
    width,
    height,
    onOpenChange,
  } = props;

  const [selftOpen, setSelfOpen] = useState<boolean>(open);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelfOpen(open);
  }, [open]);

  const prefixCls = getPrefixCls("dropdown");

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-close`]: !selftOpen,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSelfOpen(false);
        if (onOpenChange) onOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOpenChange]);

  // useEffect(() => {
  //   if (dropdownRef.current) {
  //     const height = dropdownRef.current.scrollHeight;
  //     dropdownRef.current.style.height = `${height}px`;
  //   }
  // }, [selftOpen, children]);

  return (
    <div
      className={classes}
      style={{ ...placement, width, height }}
      ref={mergeRefs(dropdownRef, ref)}
    >
      {children}
    </div>
  );
});

export default Dropdown;
