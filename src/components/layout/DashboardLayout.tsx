import { Outlet } from "react-router-dom";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

import { RouteWrapper } from "../../routes/RouteWrapper";

export const DashboardLayout = () => {
  return (
    <RouteWrapper isAuthenticationPage={false}>
      <Sidebar />

      <Main>
        <Outlet />
      </Main>
    </RouteWrapper>
  );
};
