import { BaseEventIcon } from "../ControlIcon/@types";

export interface SoundIconProps extends BaseEventIcon {
  volume?: number;
  mute?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    vol: number
  ) => void;
  onMute?: () => void;
  onVolume?: () => void;
}
