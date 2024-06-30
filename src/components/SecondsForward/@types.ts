export interface SecondsForwardProps {
  isNext: boolean;
  onClick?: (isNext: boolean, seconds: number) => void;
  icon?: React.ReactNode;
}
