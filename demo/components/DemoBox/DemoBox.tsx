import React from "react";
import { DemoBoxProps } from "./@types";
import classNames from "classnames";

const DemoBox: React.FC<DemoBoxProps> = ({ children, header, classNames }) => {
  return (
    <div className={`demo-box ${classNames} hovered-scrollbar`}>
      <div className="demo-box-header">{header}</div>
      {children}
    </div>
  );
};

export default DemoBox;
