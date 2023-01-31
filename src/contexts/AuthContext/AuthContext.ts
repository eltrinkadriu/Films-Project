import { createContext, useContext } from "react";

export type AuthContextValues = {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValues>({
  isAuthenticated: false,
  username: null,
  login: () => {},
  logout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = AuthContext.Provider;
