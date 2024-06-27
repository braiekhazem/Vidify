import React, { useEffect, useState } from "react";
import { SoundIconProps } from "./@types";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import classNames from "classnames";
import { ReactComponent as SoundSVG } from "../../global/assets/icons/volume/Sound.svg";
import { ReactComponent as MuteSVG } from "../../global/assets/icons/volume/Mute.svg";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

const SoundIcon = React.forwardRef<HTMLDivElement, SoundIconProps>(
  (props, ref) => {
    const {
      onClick,
      onMute,
      onVolume,
      volume = 100,
      mute = false,
      className,
      volumeIcon,
      muteIcon,
    } = props;

    const [selfMute, setSelfMute] = useState<boolean>(mute);

    const prefixCls = getPrefixCls("volume-button");

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-mute`]: selfMute,
    });

    const onClickHandler = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      event.stopPropagation();
      setSelfMute(!selfMute);

      onClick && onClick(event, volume);
      if (!selfMute) onMute && onMute();
      else onVolume && onVolume();
    };

    useEffect(() => {
      setSelfMute(mute);
    }, [mute]);

    const Icon = selfMute ? MuteSVG : SoundSVG;

    const originalIcon = (
      <Icon width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
    );

    const renderIcon = () => {
      if (selfMute) {
        return muteIcon || originalIcon;
      }
      return volumeIcon || originalIcon;
    };

    return (
      <div className={classes} ref={ref} onClick={onClickHandler}>
        {renderIcon()}
      </div>
    );
  }
);

export default SoundIcon;
