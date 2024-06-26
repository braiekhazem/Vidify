import React, { useRef } from "react";
import { FilterModalProps } from "./@types";
import Dropdown from "../../../common/Dropdown/Dropdown";
import { getPrefixCls } from "../../../utils/getPrefixCls";
import classNames from "classnames";
import { ReactComponent as CloseSVG } from "../../../global/assets/icons/settings/close.svg";
import { concatPrefixCls } from "../../../utils/concatPrefixCls";
import Slider from "rc-slider";
import { IVideoFilter } from "../../../components/VideoPlayer/@types";
import { useTranslation } from "react-i18next";

export const DEFAULT_VIDEO_FILTER: IVideoFilter = {
  opacity: {
    value: 100,
    min: 0,
    max: 100,
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
  },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
  },
  brightness: {
    value: 100,
    min: 0,
    max: 200,
  },
  blur: {
    value: 0,
    min: 0,
    max: 100,
  },
};

const FilterModal: React.FC<FilterModalProps> = (props) => {
  const { videoState } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(["video"]);
  const { filterOpened = false, actions, videoFilter } = videoState;

  const prefixCls = getPrefixCls("filter");

  const classes = classNames(prefixCls);

  return (
    <Dropdown
      open={filterOpened}
      onOpenChange={(open) => actions?.toggleFilterModal(open)}
      width={350}
      ref={dropdownRef}
    >
      <div className={classes} onContextMenu={(e) => e.stopPropagation()}>
        <CloseSVG
          width={20}
          height={20}
          className={concatPrefixCls(prefixCls, "close-icon")}
          onClick={() => actions?.toggleFilterModal(false)}
        />

        {Object.keys(videoFilter).map((filterKey, i) => {
          const filterInfo = videoFilter[filterKey as keyof IVideoFilter];

          return (
            <div className={concatPrefixCls(prefixCls, "item")} key={i}>
              <p>
                {t(filterKey)} <span>{filterInfo?.value || 0}</span>
              </p>
              <Slider
                className={`${concatPrefixCls(prefixCls, "slider")} vf-slider`}
                min={filterInfo?.min}
                max={filterInfo?.max}
                step={1}
                value={filterInfo?.value}
                onChange={(val) =>
                  actions?.setVideoFilter(
                    filterKey as keyof IVideoFilter,
                    val as number
                  )
                }
              />
            </div>
          );
        })}
        {/* <div
          className={`${concatPrefixCls(prefixCls, "item")} ${concatPrefixCls(
            prefixCls,
            "item-rotation"
          )}`}
          onClick={() => actions?.setRotation()}
        >
          <p>
            Rotation: <span>{1}</span>
          </p>
        </div> */}
        <div className={concatPrefixCls(prefixCls, "reset-button")}>
          <button onClick={actions?.resetVideoFilters}>{t("reset")}</button>
        </div>
      </div>
    </Dropdown>
  );
};

export default FilterModal;
