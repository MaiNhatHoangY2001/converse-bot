import AuthHeader from "@components/common/auth-header.tsx";
import ResetPasswordForm from "@pages/auth/reset-password/reset-password-form.tsx";
import {HEADER_RESET_PASSWORD} from "@utils/constants.ts";

const ResetPasswordPage = () => {
  const {title, subTitle} = HEADER_RESET_PASSWORD;

  return (
    <main className="bg-black/5 p-8 rounded-3xl flex flex-col gap-8 max-w-xl">
      <AuthHeader title={title} subTitle={subTitle} />
      <ResetPasswordForm />
    </main>
  );
};

export default ResetPasswordPage;
