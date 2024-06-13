import React from "react";
import {Button} from "@mui/base/Button";

import "@styles/variables.scss";

interface Props {
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick: (e: React.FormEvent) => void;
}

const Btn: React.FC<Props> = ({className, type, children, onClick}) => {
  return (
    <Button
      className={`${className} font-roboto text-white font-bold p-2 rounded bg-secondary-color hover:bg-accent-color2`}
      type={type}
      onClick={onClick}
      style={{fontFamily: "var(--font-family)"}}>
      {children}
    </Button>
  );
};

export default Btn;
