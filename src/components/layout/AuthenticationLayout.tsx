import { Outlet } from "react-router-dom";

import { Main } from "./Main";
import { RouteWrapper } from "../../routes/RouteWrapper";

export const AuthenticationLayout = () => {
  return (
    <RouteWrapper isAuthenticationPage={true}>
      <Main>
        <Outlet />
      </Main>
    </RouteWrapper>
  );
};
