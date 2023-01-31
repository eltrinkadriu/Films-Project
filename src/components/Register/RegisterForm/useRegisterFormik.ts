import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("First name field is required!"),
  email: Yup.string()
    .email("Please enter a valid email address!")
    .required("Email field is required!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long!")
    .required("Password field is required!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords don't match!"
  ),
  privacyTerms: Yup.boolean().oneOf(
    [true],
    "Please make sure you agree with our privacy policy terms"
  ),
});

interface RegisterFields {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
  gender: string;
  preferences: string[];
  privacyTerms: boolean;
}

interface FormikProps {
  onSubmit: (
    values: RegisterFields,
    formikHelpers: FormikHelpers<RegisterFields>
  ) => void;
}

export const useRegisterFormik = ({ onSubmit }: FormikProps) => {
  return useFormik<RegisterFields>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: 0,
      gender: "",
      preferences: [],
      privacyTerms: false,
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: RegisterSchema,
    onSubmit,
  });
};
