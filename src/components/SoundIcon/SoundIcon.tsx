import React, { useEffect, useState } from "react";
import { SoundIconProps } from "./@types";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import classNames from "classnames";
import { ReactComponent as SoundSVG } from "../../global/assets/icons/sound/Sound.svg";
import { ReactComponent as MuteSVG } from "../../global/assets/icons/sound/Mute.svg";
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

    return (
      <div className={classes} ref={ref} onClick={onClickHandler}>
        <Icon width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
      </div>
    );
  }
);

export default SoundIcon;
