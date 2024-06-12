import AuthHeader from "@components/common/auth-header.tsx";
import BackButton from "@components/ui/button/back-button.tsx";
import ForgotPasswordForm from "@pages/auth/forgot-password/forgot-password-form.tsx";
import {HEADER_FORGOT_PASSWORD} from "@utils/constants.ts";

const ForgotPasswordPage = () => {
  const {title, subTitle} = HEADER_FORGOT_PASSWORD;

  return (
    <main className="flex flex-col items-start bg-black/5 p-8 rounded-3xl gap-8 max-w-xl">
      <BackButton />
      <AuthHeader title={title} subTitle={subTitle} />
      <ForgotPasswordForm />
    </main>
  );
};

export default ForgotPasswordPage;
