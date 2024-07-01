import { FC, PropsWithChildren } from "react";

type LoginPropTypes = Readonly<PropsWithChildren>;

const LoginLayout: FC<LoginPropTypes> = ({ children }) => {
  return (
    <main className="flex min-h-dvh w-screen items-center justify-center bg-background-color p-4">
      <section className="container mx-auto flex gap-14 rounded-3xl bg-black/5 p-14 max-sm:px-4 justify-center items-center">
        {children}
      </section>
    </main>
  );
};

export default LoginLayout;
