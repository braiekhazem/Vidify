import { FC } from "react";
import { SettingsProps } from "./@types";
import { ReactComponent as SettingsSVG } from "../../global/assets/icons/settings/Settings.svg";
import { getPrefixCls } from "@src/utils/getPrefixCls";

const Settings: FC<SettingsProps> = (props) => {
  const {} = props;
  const prefixCls = getPrefixCls("settings-button");
  return (
    <div className={prefixCls}>
      <SettingsSVG width={26} height={26} />
    </div>
  );
};

export default Settings;
