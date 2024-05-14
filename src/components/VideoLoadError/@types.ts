import { ReactNode } from "react";

export interface VideoLoadErrorProps {
  src: string | null | undefined;
  className?: string | undefined;
  customErrorMessage?: string | undefined;
  onRetry?: () => void;
  withRetry?: boolean;
  renderContent?: (src: string | null | undefined) => ReactNode;
  customError?: boolean;
}
