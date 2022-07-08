import { Outlet } from "react-router-dom";
// import { LayoutWrapper } from "./Layout.styles";
const Layout = () => {
  return (
    <>
      <div className="layout-wrraper">
        
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
