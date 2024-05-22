import {ReactNode} from "react";

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="w-screen h-screen">
      <main>{children}</main>
    </div>
  );
}

export default Layout;
