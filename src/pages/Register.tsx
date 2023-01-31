import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

import { RegisterForm } from "../components/Register/RegisterForm/RegisterForm";

export const Register = () => {
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
        <h1>Register</h1>

        <RegisterForm />

        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/login">Already have an account?</NavLink>
        </Box>
      </Box>
    </Box>
  );
};
