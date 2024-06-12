import {useNavigate} from "react-router-dom";
import {ArrowBackIos} from "@mui/icons-material";
import Button from "@mui/material/Button";

const ButtonGoBack = () => {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<ArrowBackIos />}
      variant="text"
      onClick={() => navigate(-1)}>
      Go Back
    </Button>
  );
};

export default ButtonGoBack;
