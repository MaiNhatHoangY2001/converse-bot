import AuthHeader from "@components/common/auth-header.tsx";
import ButtonGoBack from "@components/ui/button/button-go-back.tsx";
import FormForgotPassword from "@pages/auth/forgot-password/form-forgot-password.tsx";
import {HEADER_FORGOT_PASSWORD} from "@utils/constants.ts";

const ForgotPasswordPage = () => {
  const {title, subTitle} = HEADER_FORGOT_PASSWORD;

  return (
    <main className="flex flex-col items-start bg-black/5 p-8 rounded-3xl gap-8 max-w-xl">
      <ButtonGoBack />
      <AuthHeader title={title} subTitle={subTitle} />
      <FormForgotPassword />
    </main>
  );
};

export default ForgotPasswordPage;
