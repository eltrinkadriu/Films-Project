import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LoginForm } from "../components/Login/LoginForm/LoginForm";

export const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: 2,
          borderColor: "secondary.main",
          borderRadius: 1,
          padding: "10px",
          minWidth: "360px",
        }}
      >
        <h1>Login</h1>

        <LoginForm />

        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/forgot-password">Forgot your password?</NavLink>
          <NavLink to="/sign-up">Create an account</NavLink>
        </Box>
      </Box>
    </Box>
  );
};
