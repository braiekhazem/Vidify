import React from "react";
import { HeaderProps } from "./@types";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as NavigateSVG } from "../../assets/navigate.svg";
import { ReactComponent as GithubSVG } from "../../assets/github.svg";
import { ReactComponent as StarSVG } from "../../assets/star.svg";
import { ReactComponent as LinkedinSVG } from "../../assets/linkedin.svg";

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Logo width={40} />
        <a href="https://github.com/braiekhazem/Vidify" target="_blank">
          <p>Vidify</p>
        </a>
      </div>
      <div className="header-right">
        <a href="https://github.com/braiekhazem/Vidify" target="_blank">
          <div className="github-button">
            <GithubSVG />
            Github
            <NavigateSVG width={20} height={20} />
          </div>
        </a>
        <a href="https://github.com/braiekhazem/Vidify" target="_blank">
          <div className="start-button">
            <StarSVG color="#fff" width={20} height={20} />
            Star
          </div>
        </a>
        <a
          href="https://www.buymeacoffee.com/hazembraiek"
          className="buy-me-coffee-button"
          target="_blank"
        >
          <img
            src="https://camo.githubusercontent.com/cace41b0afc90c68d0207e2bd809ee121f9ff4f72ac032e8ced972aee7adbb23/68747470733a2f2f63646e2e6275796d6561636f666665652e636f6d2f627574746f6e732f76322f64656661756c742d79656c6c6f772e706e67"
            alt="Buy Me A Coffee"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/braiek-hazem/"
          target="_blank"
          title="linkedin profile"
        >
          <div className="github-button">
            <LinkedinSVG width={30} height={42} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
