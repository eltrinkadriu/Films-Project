import React from "react";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  isAuthenticationPage: boolean;
};

export const RouteWrapper = ({ isAuthenticationPage, children }: Props) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticationPage && isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  if (!isAuthenticationPage && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
