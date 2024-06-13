import {useNavigate} from "react-router-dom";
import AuthHeader from "@components/common/auth-header.tsx";
import BackButton from "@components/ui/button/btn";
import {ArrowBackIos} from "@mui/icons-material";
import VerifyEmailForm from "@pages/auth/verify-email/verify-email-form.tsx";
import {HEADER_VERIFY_EMAIL} from "@utils/constants.ts";

const VerifyEmail = () => {
  const {title, subTitle} = HEADER_VERIFY_EMAIL;
  const navigate = useNavigate();

  return (
    <main className="max-w-md space-y-8 bg-black/5 p-8 rounded-3xl">
      <BackButton
        className="flex items-center"
        type="button"
        onClick={() => {
          navigate(-1);
        }}>
        <ArrowBackIos fontSize="small" />
        Go back
      </BackButton>
      <AuthHeader title={title} subTitle={subTitle} />
      <VerifyEmailForm />
    </main>
  );
};

export default VerifyEmail;
