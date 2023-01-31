import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const messageSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
});

export interface ForgotPasswordFields {
  email: string;
}

interface UseLoginFormOptions {
  onSubmit: (
    values: ForgotPasswordFields,
    formikHelpers: FormikHelpers<ForgotPasswordFields>
  ) => void;
}

export const useMessageFormik = ({ onSubmit }: UseLoginFormOptions) => {
  return useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: messageSchema,
    onSubmit,
  });
};
