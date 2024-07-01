export interface FullScreenProps {
  onFullScreen?: () => void;
  onCancelFullScreen?: () => void;
  className?: string;
  icon?: React.ReactNode;
  exitFullScreenIcon?: React.ReactNode;
}
