import React, { Fragment, useEffect, useRef, useState } from "react";
import { SettingsDropdownProps, SpeedType, TabProps, TabsType } from "./@types";
import { getPrefixCls } from "../../utils/getPrefixCls";
import classNames from "classnames";
import { concatPrefixCls } from "../../utils/concatPrefixCls";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";
import { ReactComponent as PlayBackSpeedSVG } from "../../global/assets/icons/settings/playback-speed.svg";
import { ReactComponent as AnnotationSVG } from "../../global/assets/icons/settings/annotation.svg";
import { ReactComponent as AngleRightSVG } from "../../global/assets/icons/settings/angle-right.svg";
import { ReactComponent as AngleLeftSVG } from "../../global/assets/icons/settings/angle-left.svg";
import { ReactComponent as CheckSVG } from "../../global/assets/icons/settings/check.svg";
import { ReactComponent as FilterSVG } from "../../global/assets/icons/settings/filter.svg";
import Slider from "rc-slider";
import { useTranslation } from "react-i18next";
import Dropdown from "../../common/Dropdown";

const SettingsTab: React.FC<TabProps> = (props) => {
  const { className, prefixCls, setActiveTab, actions, videoState } = props;
  const { t } = useTranslation(["video"]);

  const toggleAnnotationHandler = () => actions?.toggleAnnotation();

  const openFilterHandler = () => {
    actions?.toggleFilterModal(!videoState.filterOpened);
    actions?.closeDropdownSettings();
  };

  const setSpeedTabnHandler = () => setActiveTab(1);

  return (
    <div className={className}>
      <div
        className={concatPrefixCls(prefixCls, "item")}
        onClick={setSpeedTabnHandler}
      >
        <div className={concatPrefixCls(prefixCls, "icon")}>
          <PlayBackSpeedSVG
            width={DEFAULT_ICONS_SIZE}
            height={DEFAULT_ICONS_SIZE}
          />
        </div>

        <div className={concatPrefixCls(prefixCls, "label")}>
          {t("playback_speed")}
        </div>
        <div className={concatPrefixCls(prefixCls, "content")}>
          {videoState.speed === 1 ? t("normal") : videoState.speed}
          <AngleRightSVG
            width={DEFAULT_ICONS_SIZE}
            height={DEFAULT_ICONS_SIZE}
          />
        </div>
      </div>
      <div
        className={concatPrefixCls(prefixCls, "item")}
        onClick={toggleAnnotationHandler}
      >
        <div className={concatPrefixCls(prefixCls, "icon")}>
          <AnnotationSVG
            width={DEFAULT_ICONS_SIZE}
            height={DEFAULT_ICONS_SIZE}
          />
        </div>

        <div className={concatPrefixCls(prefixCls, "label")}>
          {t("annotations")}
        </div>
        <div className={concatPrefixCls(prefixCls, "content")}>
          <Switch checked={videoState.annotation} />
        </div>
      </div>
      <div
        className={concatPrefixCls(prefixCls, "item")}
        onClick={openFilterHandler}
      >
        <div className={concatPrefixCls(prefixCls, "icon")}>
          <FilterSVG width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />
        </div>

        <div className={concatPrefixCls(prefixCls, "label")}>{t("filter")}</div>
      </div>
    </div>
  );
};

const SpeedTab: React.FC<TabProps> = (props) => {
  const { className, prefixCls, setActiveTab, actions, videoState } = props;
  const { t } = useTranslation(["video"]);
  const backToPreviousTab = () => setActiveTab(0);

  const classes = classNames(className, concatPrefixCls(prefixCls, "speed"));

  const speeds: SpeedType[] = [
    { label: "0.25", value: 0.25 },
    { label: "0.5", value: 0.5 },
    { label: "0.75", value: 0.75 },
    { label: t("normal"), value: 1.0 },
    { label: "1.25", value: 1.25 },
    { label: "1.5", value: 1.5 },
    { label: "1.75", value: 1.75 },
    { label: "2", value: 2.0 },
  ];

  return (
    <div className={classes}>
      <div
        className={concatPrefixCls(prefixCls, "header")}
        onClick={backToPreviousTab}
      >
        <AngleLeftSVG width={DEFAULT_ICONS_SIZE} height={DEFAULT_ICONS_SIZE} />{" "}
        <p>{t("playback_speed")}</p>
      </div>
      {speeds.map((speed, i) => (
        <div
          key={i}
          className={concatPrefixCls(prefixCls, "item")}
          onClick={() => {
            actions?.setSpeed(speed.value);
            backToPreviousTab();
          }}
        >
          {videoState.speed === speed.value && <CheckSVG />}
          {speed.label}
        </div>
      ))}
      <div className={concatPrefixCls(prefixCls, "custom-speed")}>
        <Slider
          className="vf-slider"
          min={0.1}
          max={3}
          step={0.05}
          value={videoState.speed}
          onChange={(speed) => actions?.setSpeed(speed as number)}
        />
        <span>{videoState.speed}</span>
      </div>
    </div>
  );
};

const tabs: TabsType = {
  0: SettingsTab,
  1: SpeedTab,
};

const SettingsDropdown: React.FC<SettingsDropdownProps> = (props) => {
  const { actions, videoState, className, currentVideoRef, videoWidth } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [dropdownHeight, setDropdownHeight] = useState<number | null>(null);

  const [activeTab, setActiveTab] = useState<number>(0);

  const prefixCls = getPrefixCls("panel-menu");

  const classes = classNames(prefixCls, className);

  const Tab = tabs[activeTab] || Fragment;

  const isOpen = videoState.dropdownSettingsOpen;

  useEffect(() => {
    setActiveTab(0);
  }, [isOpen]);

  useEffect(() => {
    const video = currentVideoRef;

    const adjustDropdownHeight = () => {
      if (dropdownRef.current && video) {
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const dropdownHeight = dropdownRef.current.clientHeight;
        const videoPlayerRect = video.getBoundingClientRect();
        const dropdownTop = dropdownRect.top;
        const videoPlayerTop = videoPlayerRect.top;
        if (dropdownTop < videoPlayerTop) {
          const diff = videoPlayerTop - dropdownTop;
          const newHeight = dropdownHeight - diff;
          setDropdownHeight(newHeight);
        } else setDropdownHeight(null);
      }
    };

    if (isOpen && activeTab === 1) adjustDropdownHeight();
    else setDropdownHeight(null);
  }, [activeTab, videoWidth, isOpen, currentVideoRef]);

  useEffect(() => {
    actions?.closeDropdownSettings();
  }, [videoWidth]);

  return (
    <Dropdown
      placement={{ right: 12, bottom: 67 }}
      width={226}
      open={isOpen}
      ref={dropdownRef}
      onOpenChange={(open) =>
        open
          ? actions?.openDropdownSettings()
          : actions?.closeDropdownSettings()
      }
    >
      <div style={{ height: dropdownHeight || "auto" }}>
        <Tab
          className={classes}
          prefixCls={prefixCls}
          setActiveTab={setActiveTab}
          videoState={videoState}
          actions={actions}
        />
      </div>
    </Dropdown>
  );
};

export default SettingsDropdown;
