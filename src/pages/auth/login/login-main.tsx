import { Button, Divider } from "@mui/material";
import { FC, memo as Memo, PropsWithChildren } from "react";

import LoginForm from "./login-form.tsx";

const LoginDivider = Memo(() => {
  return (
    <Divider>
      <p className="text-sm text-[#313131]">Or login with</p>
    </Divider>
  );
});

const ConnectGoogleButton = () => {
  return (
    <Button disabled className="h-12" variant="outlined" color="secondary">
      Login with Google
    </Button>
  );
};

const LoginHeader: FC<
  Readonly<{
    title: string;
    subTitle: string;
  }>
> = ({ title, subTitle }) => {
  return (
    <hgroup className="flex flex-col gap-4 max-sm:items-center">
      <h1 className="text-5xl font-semibold max-sm:text-3xl">{title}</h1>
      <p className="text-base font-normal">{subTitle}</p>
    </hgroup>
  );
};

const ContainerBodyLogin: FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className="flex w-full max-w-[512px] flex-col gap-16 max-sm:gap-12">
      {children}
    </article>
  );
};

const LoginMain = () => {
  return (
    <ContainerBodyLogin>
      <LoginHeader
        title="Login"
        subTitle="Login to access your traverse account"
      />

      <LoginForm />

      <LoginDivider />

      <ConnectGoogleButton />
    </ContainerBodyLogin>
  );
};

export default LoginMain;
