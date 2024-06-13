import {useNavigate} from "react-router-dom";
import AuthHeader from "@components/common/auth-header.tsx";
import BackButton from "@components/ui/button/btn";
import {ArrowBackIos} from "@mui/icons-material";
import ForgotPasswordForm from "@pages/auth/forgot-password/forgot-password-form.tsx";
import {HEADER_FORGOT_PASSWORD} from "@utils/constants.ts";

const ForgotPasswordPage = () => {
  const {title, subTitle} = HEADER_FORGOT_PASSWORD;
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-start bg-black/5 p-8 rounded-3xl gap-8 max-w-xl">
      <BackButton
        className="flex items-center"
        type="button"
        onClick={() => {
          navigate(-1);
        }}>
        <ArrowBackIos fontSize="small" />
        Back to login
      </BackButton>
      <AuthHeader title={title} subTitle={subTitle} />
      <ForgotPasswordForm />
    </main>
  );
};

export default ForgotPasswordPage;
