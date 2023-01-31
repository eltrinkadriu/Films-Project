import React, { useState } from "react";
import { AuthContextValues, AuthProvider } from "./AuthContext";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | null>(() => {
    const value = localStorage.getItem("user");
    return value;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storageValue = localStorage.getItem("authenticated");

    return storageValue != null;
  });

  const handleLogin = (username: string) => {
    setIsAuthenticated(true);
    setUsername(username);
    localStorage.setItem("authenticated", JSON.stringify(true));
    localStorage.setItem("user", username);

    navigate({
      pathname: "/",
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    localStorage.removeItem("authenticated");
    localStorage.removeItem("user");
    window.location.reload();

    navigate({
      pathname: "/login",
    });
  };

  const contextValues: AuthContextValues = {
    isAuthenticated,
    username,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthProvider value={contextValues}>{children}</AuthProvider>;
};
