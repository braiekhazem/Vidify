import React from "react";
import { SubtitleProps } from "./@types";
import { ReactComponent as SubtitleSVG } from "../../global/assets/icons/subtitle/subtitle.svg";
import { ReactComponent as InactiveSubtitleSVG } from "../../global/assets/icons/subtitle/inactive-subtitle.svg";
import { getPrefixCls } from "@src/utils/getPrefixCls";

const Subtitle: React.FC<SubtitleProps> = (props) => {
  const {} = props;

  const prefixCls = getPrefixCls("subtitle-button");

  const subtitleActive = true;
  const Icon = subtitleActive ? SubtitleSVG : InactiveSubtitleSVG;
  return (
    <div className={prefixCls}>
      <Icon width={26} height={26} />
    </div>
  );
};

export default Subtitle;
