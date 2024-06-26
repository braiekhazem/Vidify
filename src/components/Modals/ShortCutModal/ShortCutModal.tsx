import React from "react";
import { ShortCutModalProps } from "./@types";
import Dropdown from "../../../common/Dropdown";
import { getPrefixCls } from "../../../utils/getPrefixCls";
import classNames from "classnames";
import { concatPrefixCls } from "../../../utils/concatPrefixCls";
import { useTranslation } from "react-i18next";
import { ReactComponent as CloseSVG } from "../../../global/assets/icons/settings/close.svg";
import { vidifyShortcuts } from "../../../utils/managePlayerKeyDown";

const ShortCutModal: React.FC<ShortCutModalProps> = (props) => {
  const { videoState, toggleModal } = props;
  const { keyboardOpened: isOpen = false } = videoState;

  const { t } = useTranslation(["video"]);

  const prefixCls = getPrefixCls("shortcuts");

  const classes = classNames(prefixCls);

  return (
    <Dropdown
      placement={{ top: 20, left: 20 }}
      open={isOpen}
      width={300}
      onOpenChange={(open) => toggleModal(open)}
    >
      <div className={classes} onContextMenu={(e) => e.stopPropagation()}>
        <div className={concatPrefixCls(prefixCls, "header")}>
          <p>{t("keyboard_shortcuts")}</p>
          <CloseSVG width={20} height={20} onClick={() => toggleModal(false)} />
        </div>
        <div className={concatPrefixCls(prefixCls, "content")}>
          {Object.keys(vidifyShortcuts).map((shortcut, i) => (
            <div className={concatPrefixCls(prefixCls, "item")} key={i}>
              <p>{t(shortcut)}</p>
              <div>
                {vidifyShortcuts[shortcut as keyof typeof vidifyShortcuts]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dropdown>
  );
};

export default ShortCutModal;
