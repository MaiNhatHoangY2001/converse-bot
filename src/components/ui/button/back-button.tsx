import {useNavigate} from "react-router-dom";
import {ArrowBackIos} from "@mui/icons-material";
import Button from "@mui/material/Button";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<ArrowBackIos />}
      variant="text"
      onClick={() => {
        // navigate(-1) is equivalent to hitting the back button
        // link: https://reactrouter.com/en/main/hooks/use-navigate#usenavigate
        navigate(-1);
      }}>
      Go Back
    </Button>
  );
};

export default BackButton;
