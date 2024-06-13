import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/base/Button";
import {ArrowBackIos} from "@mui/icons-material";

import "@styles/variables.scss";

interface Props {
  children?: React.ReactNode;
}

const Btn: React.FC<Props> = ({children}) => {
  const navigate = useNavigate();

  return (
    <Button
      className="flex items-center"
      onClick={() => {
        // navigate(-1) is equivalent to hitting the back button
        // link: https://reactrouter.com/en/main/hooks/use-navigate#usenavigate
        navigate(-1);
      }}>
      <ArrowBackIos fontSize="small" />
      {children}
    </Button>
  );
};

export default Btn;
