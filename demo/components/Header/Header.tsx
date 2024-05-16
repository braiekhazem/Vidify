import React, { useState } from "react";
import { HeaderProps } from "./@types";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as NavigateSVG } from "../../assets/navigate.svg";
import { ReactComponent as GithubSVG } from "../../assets/github.svg";
import { ReactComponent as StarSVG } from "../../assets/star.svg";
import { ReactComponent as LinkedinSVG } from "../../assets/linkedin.svg";
import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";
import { ReactComponent as CodeSVG } from "../../assets/code.svg";
import { ReactComponent as ByMeCoffeeSVG } from "../../assets/by-me-coffee.svg";
import { generateCode } from "../../utils/generateCode";
import { Tooltip } from "react-tooltip";
import Editor from "@monaco-editor/react";
import useWindowSize from "../../../src//hooks/useWindowSize";

const Header: React.FC<HeaderProps> = (props) => {
  const { videoState, extraInfos } = props;
  const [generatedCode, setCode] = useState<string | null>(null);
  const [preparingCode, setPreparing] = useState<boolean>(false);
  const { width = 0 } = useWindowSize();

  const generateCodeHandler = async () => {
    if (generatedCode) {
      setCode(null);
      return;
    }
    setPreparing(true);
    const code = await generateCode(videoState, extraInfos);
    setTimeout(() => {
      setPreparing(false);
      setCode(code);
    }, 600);
  };

  const isSmall = width <= 1000;

  return (
    <div className="header">
      <div className="header-left">
        <Logo width={35} height={35} />
        <a href="https://github.com/braiekhazem/Vidify" target="_blank">
          <p>Vidify</p>
        </a>
      </div>
      <div className="header-right">
        {!isSmall && (
          <a href="https://github.com/braiekhazem/Vidify" target="_blank">
            <div className="github-button">
              <GithubSVG />
              Github
              <NavigateSVG width={20} height={20} />
            </div>
          </a>
        )}
        <div
          className="generate-code-button"
          onClick={generateCodeHandler}
          data-tooltip-id={"generate-code" as string}
        >
          {preparingCode ? <LoaderSVG width={20} height={20} /> : null}
          {isSmall ? <CodeSVG width={20} height={20} /> : "Generate Code"}
          <div onClick={(e) => e.stopPropagation()}>
            <Tooltip
              id={"generate-code"}
              variant="dark"
              offset={20}
              isOpen={!!generatedCode}
              noArrow={true}
              openOnClick
              closeEvents={{ click: true, blur: true }}
              place={"top-end"}
              clickable
            >
              {generatedCode && (
                <Editor
                  height={350}
                  options={{
                    minimap: { enabled: false },
                    formatOnType: true,
                    formatOnPaste: true,
                    fontSize: 14,
                    lineNumbers: "off",
                    folding: false,
                    lineHeight: 20,
                  }}
                  theme="vs-dark"
                  defaultLanguage="javascript"
                  defaultValue={generatedCode}
                />
              )}
            </Tooltip>
          </div>
        </div>
        <a href="https://github.com/braiekhazem/Vidify" target="_blank">
          <div className="start-button">
            {isSmall ? (
              <GithubSVG />
            ) : (
              <StarSVG color="#fff" width={20} height={20} />
            )}
            {!isSmall && "Star"}
          </div>
        </a>
        <a
          href="https://www.buymeacoffee.com/hazembraiek"
          className="buy-me-coffee-button"
          target="_blank"
        >
          {isSmall ? (
            <ByMeCoffeeSVG />
          ) : (
            <img
              src="https://camo.githubusercontent.com/cace41b0afc90c68d0207e2bd809ee121f9ff4f72ac032e8ced972aee7adbb23/68747470733a2f2f63646e2e6275796d6561636f666665652e636f6d2f627574746f6e732f76322f64656661756c742d79656c6c6f772e706e67"
              alt="Buy Me A Coffee"
            />
          )}
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
