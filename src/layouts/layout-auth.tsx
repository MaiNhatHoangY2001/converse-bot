import Logo from "@components/common/logo.tsx";
import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <main className="container mx-auto flex flex-col min-h-screen">
      <header className="py-1 fixed top-0 inset-x-0 container mx-auto">
        <Logo />
      </header>
      <section className="flex-1 flex justify-center items-center">
        <Outlet />
      </section>
    </main>
  );
};

export default LayoutAuth;
