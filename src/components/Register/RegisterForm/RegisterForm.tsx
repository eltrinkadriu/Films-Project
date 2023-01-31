import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useRegisterFormik } from "./useRegisterFormik";

export const RegisterForm = () => {
  const formik = useRegisterFormik({
    onSubmit(values, formikHelpers) {
      console.info(values);

      setTimeout(() => {
        formikHelpers.setSubmitting(false);
      }, 5000);
    },
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 4,
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        sx={{ marginBottom: 2 }}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={
          formik.touched.username && formik.errors.username
            ? formik.errors.username
            : ""
        }
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        sx={{ marginBottom: 2 }}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={
          formik.touched.email && formik.errors.email ? formik.errors.email : ""
        }
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        sx={{ marginBottom: 2 }}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : ""
        }
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        variant="outlined"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        sx={{ marginBottom: 2 }}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? formik.errors.confirmPassword
            : ""
        }
      />
      <TextField
        id="age"
        label="Age"
        variant="outlined"
        type="number"
        name="age"
        value={formik.values.age}
        onChange={formik.handleChange}
        sx={{ marginBottom: 2 }}
      />
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          value={formik.values.gender}
          label="Gender"
          name="gender"
          onChange={formik.handleChange}
        >
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="F">F</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="preferences-label">Preferences</InputLabel>
        <Select
          multiple
          labelId="preferences-label"
          value={formik.values.preferences}
          label="Preferences"
          name="preferences"
          onChange={formik.handleChange}
        >
          <MenuItem value="Action">Action</MenuItem>
          <MenuItem value="Comedy">Comedy</MenuItem>
          <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
          <MenuItem value="Thriller">Thriller</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        required
        variant="standard"
        component="fieldset"
        sx={{ marginBottom: 3 }}
        error={
          formik.touched.privacyTerms && Boolean(formik.errors.privacyTerms)
        }
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.privacyTerms}
                onChange={formik.handleChange}
                name="privacyTerms"
              />
            }
            label="I agree with the privacy policy"
          />
        </FormGroup>
        {formik.touched.privacyTerms && Boolean(formik.errors.privacyTerms) && (
          <FormHelperText>{formik.errors.privacyTerms}</FormHelperText>
        )}
      </FormControl>

      <Button type="submit" variant="contained" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? "Registering..." : "Register"}
      </Button>
    </Box>
  );
};
