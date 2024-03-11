import { Outlet, Link } from "react-router-dom";
import NavMenu from "./NavMenu";
export function RootLayout() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0">
      <NavMenu />
      <Outlet />
    </main>
  );
}
