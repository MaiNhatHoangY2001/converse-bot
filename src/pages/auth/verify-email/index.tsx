import AuthHeader from "@components/common/auth-header.tsx";
import BackButton from "@components/ui/button/back-button.tsx";
import VerifyEmailForm from "@pages/auth/verify-email/verify-email-form.tsx";
import {HEADER_VERIFY_EMAIL} from "@utils/constants.ts";

const VerifyEmail = () => {
  const {title, subTitle} = HEADER_VERIFY_EMAIL;
  return (
    <main className="max-w-md space-y-8 bg-black/5 p-8 rounded-3xl">
      <BackButton>Go Back</BackButton>
      <AuthHeader title={title} subTitle={subTitle} />
      <VerifyEmailForm />
    </main>
  );
};

export default VerifyEmail;
