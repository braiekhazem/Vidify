export interface ArrowNavigationProps {
  type: "next" | "prev";
  onClickNext?: () => void;
  onClickPrev?: () => void;
  disabled: boolean;
  className?: string;
}
