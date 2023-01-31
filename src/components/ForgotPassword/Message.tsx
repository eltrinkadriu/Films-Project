import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ForgotPasswordFields } from "./useMessageFormik";

type MessageProps = {
  values: ForgotPasswordFields;
};

export const Message = ({ values }: MessageProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          letterSpacing: 1,
          lineHeight: 1.5,
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          border: "1px solid gray",
          borderRadius: 1,
        }}
      >
        <p
          style={{
            fontSize: "20px",
            margin: "2rem",
            textAlign: "center",
          }}
        >
          Instructions to reset your password are sent to {values.email}
        </p>

        <NavLink
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            textDecoration: "none",
            fontSize: "2rem",
          }}
        >
          Back to Login
        </NavLink>
      </Box>
    </Box>
  );
};
