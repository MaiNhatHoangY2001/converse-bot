/* eslint-disable react/function-component-definition */
import {Button} from "@mui/base/Button";
import React from "react";
import "../../styles/variables.scss";

interface Props {
  className: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Btn: React.FC<Props> = ({className, children, onClick}) => {
  return (
    <Button
      className={`${className} font-roboto text-white font-bold p-1 rounded-full`}
      onClick={onClick}
      style={{fontFamily: "var(--font-family)"}}>
      {children}
    </Button>
  );
};

export default Btn;
