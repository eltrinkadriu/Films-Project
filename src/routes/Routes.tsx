import { RouteObject, useRoutes } from "react-router-dom";
import { AuthenticationLayout } from "../components/layout/AuthenticationLayout";
import { DashboardLayout } from "../components/layout/DashboardLayout";

import {
  Error404,
  Home,
  Login,
  Register,
  Posts,
  Products,
  Users,
  SingleUser,
  ForgotPassword,
} from "../pages";

export const dashboardRoutes: RouteObject[] = [
  {
    element: <AuthenticationLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },

  {
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/posts", element: <Posts /> },
      { path: "/products", element: <Products /> },
      { path: "/users", element: <Users /> },
      { path: "/users/:id", element: <SingleUser /> },
    ],
  },

  { path: "*", element: <Error404 /> },
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
