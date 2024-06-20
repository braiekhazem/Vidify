import { ReactNode } from "react";

export interface DropdownMenuItems {
  label: ReactNode;
  disabled?: boolean;
  onClick?: (item: DropdownMenuItems) => void;
}

export interface DropdownProps {
  className?: string;
  children: ReactNode;
  open?: boolean;
  menu?: DropdownMenuItems[];
  placement?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  width?: number;
  height?: number;
  onOpenChange?: (open: boolean) => void;
}
