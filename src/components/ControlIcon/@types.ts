export interface ControlIconProps extends BaseEventIcon {
  play?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onChange?: (play?: boolean) => void;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    p: boolean
  ) => void;
  icon?: React.ReactNode;
  pauseIcon?: React.ReactNode;
}

export interface BaseEventIcon {
  className?: string;
}
