import { FC } from "react";
import { SettingsProps } from "./@types";
import { ReactComponent as SettingsSVG } from "../../global/assets/icons/settings/Settings.svg";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

const Settings: FC<SettingsProps> = (props) => {
  const {} = props;
  const prefixCls = getPrefixCls("settings-button");
  return (
    <div className={prefixCls}>
      <SettingsSVG width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
    </div>
  );
};

export default Settings;
