/// <reference types="react" />
export interface ControlIconProps extends BaseEventIcon {
    play?: boolean;
    onPlay?: () => void;
    onPause?: () => void;
    onChange?: (play?: boolean) => void;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, p: boolean) => void;
}
export interface BaseEventIcon {
    className?: string;
}
