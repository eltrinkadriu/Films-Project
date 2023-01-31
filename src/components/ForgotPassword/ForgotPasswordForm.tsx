import { Box, Button, TextField, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FormikProps } from "formik";

type Values = {
  email: string;
};

type Errors = {
  email: string;
};

type ForgotPasswordFormProps = {
  onResetPassword?: () => void;
  formik: FormikProps<Values | Errors>;
};

export const ForgotPasswordForm = ({
  onResetPassword,
  formik,
}: ForgotPasswordFormProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <h1 style={{ marginBottom: "15px" }}>Forgot Password</h1>
        <Box
          component="form"
          noValidate
          autoComplete="off"
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
          onSubmit={onResetPassword}
        >
          Lost your password? Please enter your email address. You will receive
          a link to create a new password via email.
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            variant="standard"
            sx={{ mx: 0, my: 2, maxWidth: 250 }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={
              Boolean(formik.errors.email) || formik.values.email.length === 0
            }
            sx={{
              color: "white",
              maxWidth: 170,
              marginBottom: 5,
            }}
          >
            Reset password
          </Button>
          <Divider
            sx={{
              marginBottom: 2,
              borderStyle: "dashed",
              borderBottomWidth: "2px",
            }}
          />
          <NavLink
            to="/login"
            style={{
              marginBottom: "10px",
              textDecoration: "none",
            }}
          >
            Remember your password?
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};
