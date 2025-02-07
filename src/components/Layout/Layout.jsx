import {Outlet} from "react-router-dom";
import HeaderLayout from "./HeaderLayout";

function Layout() {
  return (
    <>
      <HeaderLayout></HeaderLayout>
      <Outlet />
    </>
  );
}

export default Layout;
