import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import { IMAGES } from "@utils/constants.ts";

import LoginForm from "./login-form.tsx";
import LoginLayout from "./login-layout.tsx";

const LoginPage = () => {
  return (
    <LoginLayout>
      <article className="flex w-full max-w-[512px] flex-col gap-16 max-sm:gap-12">
        <hgroup className="flex flex-col gap-4 max-sm:items-center">
          <h1 className="text-5xl font-semibold max-sm:text-3xl">Login</h1>
          <p className="text-base font-normal">
            Login to access your traverse account
          </p>
        </hgroup>

        <LoginForm />

        <Divider>
          <p className="text-sm text-[#313131]">Or login with</p>
        </Divider>

        <Button disabled className="h-12" variant="outlined" color="secondary">
          Login with Google
        </Button>
      </article>

      <article className="flex flex-1 items-center justify-center max-lg:hidden">
        <img src={IMAGES.bannerLogin} alt="banner login" />
      </article>
    </LoginLayout>
  );
};

export default LoginPage;
