import AuthHeader from "@components/common/auth-header.tsx";
import ButtonGoBack from "@components/ui/button/button-go-back.tsx";
import FormVerifyEmail from "@pages/auth/verify-email/form-verify-email.tsx";
import {HEADER_VERIFY_EMAIL} from "@utils/constants.ts";

const VerifyEmail = () => {
  const {title, subTitle} = HEADER_VERIFY_EMAIL;
  return (
    <main className="max-w-md space-y-8 bg-black/5 p-8 rounded-3xl">
      <ButtonGoBack />
      <AuthHeader title={title} subTitle={subTitle} />
      <FormVerifyEmail />
    </main>
  );
};

export default VerifyEmail;
