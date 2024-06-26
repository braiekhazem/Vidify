import { FC, memo } from "react";
import { SettingsProps } from "./@types";
import { ReactComponent as SettingsSVG } from "../../global/assets/icons/settings/settings.svg";
import { getPrefixCls } from "./../../utils/getPrefixCls";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

const Settings: FC<SettingsProps> = (props) => {
  const { onClick, icon } = props;

  const onClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();

    onClick && onClick();
  };

  const prefixCls = getPrefixCls("settings-button");

  return (
    <div className={prefixCls} onClick={onClickHandler}>
      {icon || (
        <SettingsSVG width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
      )}
    </div>
  );
};

export default memo(Settings);
