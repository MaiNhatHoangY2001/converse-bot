/* eslint-disable react/function-component-definition */
import React from "react";
import {Link} from "react-router-dom";
import "../../styles/variables.scss";

interface LinkProps {
  className: string;
  to: string;
  children?: React.ReactNode;
}

const LinkBtn: React.FC<LinkProps> = ({className, children, to}) => {
  return (
    <Link
      className={`${className} font-roboto text-white font-bold flex items-center justify-center p-1 rounded-full`}
      to={to}
      style={{fontFamily: "var(--font-family)"}}>
      {children}
    </Link>
  );
};

export default LinkBtn;
