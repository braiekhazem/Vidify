import React, { Fragment } from "react";
import { VideoLoadErrorProps } from "./@types";
import { getPrefixCls } from "@src/utils/getPrefixCls";
import classNames from "classnames";
import { concatPrefixCls } from "@src/utils/concatPrefixCls";
import { ReactComponent as RetrySVG } from "../../global/assets/icons/error/retry.svg";
import { DEFAULT_ICONS_SIZE } from "../VideoPlayer/VideoPlayer";

enum ErrorsTypes {
  NO_SRC,
  WRONG_SRC,
}

const errors = {
  [ErrorsTypes.NO_SRC]: "Oops! It seems like there's no video source found.",
  [ErrorsTypes.WRONG_SRC]: "Please ensure the video source URL is correct.",
};

const getErrorType = (src: VideoLoadErrorProps["src"]) => {
  if (src) {
    return ErrorsTypes.WRONG_SRC;
  } else return ErrorsTypes.NO_SRC;
};

const VideoLoadError: React.FC<VideoLoadErrorProps> = (props) => {
  const {
    onRetry,
    className,
    customErrorMessage,
    src,
    customError = false,
    withRetry = true,
    renderContent,
  } = props;

  const prefixCls = getPrefixCls("error");

  const classes = classNames(prefixCls, className);

  const errorType = getErrorType(src);
  const messageError = customErrorMessage || errors[errorType];

  return (
    <div className={classes}>
      <div className={concatPrefixCls(prefixCls, "content")}>
        {customError && renderContent ? (
          renderContent(src)
        ) : (
          <Fragment>
            <h3>Error: Unable to load video</h3>
            <p>{messageError}</p>
            {withRetry && (
              <div
                className={concatPrefixCls(prefixCls, "retry")}
                onClick={onRetry}
                title="retry"
              >
                <RetrySVG
                  width={DEFAULT_ICONS_SIZE}
                  height={DEFAULT_ICONS_SIZE}
                />
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default VideoLoadError;
