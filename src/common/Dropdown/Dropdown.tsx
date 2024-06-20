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

  const parentElement = document.querySelector(".vf-video-wrapper");

  const [selfOpen, setSelfOpen] = useState<boolean>(open);
  const [dropdownStyles, setDropdownStyles] = useState<React.CSSProperties>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelfOpen(open);
  }, [open]);

  const prefixCls = getPrefixCls("dropdown");

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-close`]: !selfOpen,
  });

  const updateDropdownPosition = () => {
    if (!parentElement || !dropdownRef.current) return;

    const parentRect = parentElement.getBoundingClientRect();
    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    let newPlacement: DropdownProps["placement"] = { ...placement };

    if (placement.top !== undefined) {
      newPlacement.top = Math.max(
        0,
        Math.min(placement.top, parentRect.height - dropdownRect.height)
      );
    }
    if (placement.left !== undefined) {
      newPlacement.left = Math.max(
        0,
        Math.min(placement.left, parentRect.width - dropdownRect.width)
      );
    }
    if (placement.bottom !== undefined) {
      newPlacement.bottom = Math.max(
        0,
        Math.min(placement.bottom, parentRect.height - dropdownRect.height)
      );
    }
    if (placement.right !== undefined) {
      newPlacement.right = Math.max(
        0,
        Math.min(placement.right, parentRect.width - dropdownRect.width)
      );
    }
    setDropdownStyles(newPlacement);
  };

  useEffect(() => {
    updateDropdownPosition();
  }, [placement, dropdownRef.current, selfOpen]);

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

  return (
    <div
      className={classes}
      style={{ ...dropdownStyles, width, height }}
      ref={mergeRefs(dropdownRef, ref)}
    >
      {children}
    </div>
  );
});

export default Dropdown;
