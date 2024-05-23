import { FC, memo } from "react";
import { SettingsProps } from "./@types";
import { ReactComponent as SettingsSVG } from "../../global/assets/icons/settings/Settings.svg";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

const Settings: FC<SettingsProps> = (props) => {
  const { onClick, isActive } = props;

  const onClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();

    onClick && onClick();
  };

  const prefixCls = getPrefixCls("settings-button");
  console.log({ isActive });

  return (
    <div className={prefixCls} onClick={onClickHandler}>
      <SettingsSVG width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
    </div>
  );
};

export default memo(Settings);
