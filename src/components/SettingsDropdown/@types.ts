import { VideoPlayerState } from "../VideoPlayer/@types";

export interface SettingsDropdownProps {
  videoState: VideoPlayerState;
  actions: VideoPlayerState["actions"];
  className?: string;
  currentVideoRef: HTMLVideoElement | null;
  videoWidth: number;
}

export interface TabProps {
  className: string;
  prefixCls: string;
  setActiveTab: (t: number) => void;
  videoState: VideoPlayerState;
  actions: VideoPlayerState["actions"];
}

type TabComponent = React.FC<TabProps>;

export interface TabsType {
  [key: number]: TabComponent;
}

export interface SpeedType {
  label: string;
  value: number;
}
