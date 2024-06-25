import LoginBanner from "./login-banner.tsx";
import LoginLayout from "./login-layout.tsx";
import LoginMain from "./login-main.tsx";

const LoginPage = () => {
  return (
    <LoginLayout>
      <LoginMain />

      <LoginBanner />
    </LoginLayout>
  );
};

export default LoginPage;
