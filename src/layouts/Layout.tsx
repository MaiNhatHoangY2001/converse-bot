import {ReactNode} from "react";

function Layout({children}: {children: ReactNode}) {
  return <main className="w-screen h-screen">{children}</main>;
}

export default Layout;
