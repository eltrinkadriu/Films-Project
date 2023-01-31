import { useState } from "react";
import { ForgotPasswordForm } from "../components/ForgotPassword/ForgotPasswordForm";
import { useMessageFormik } from "../components/ForgotPassword/useMessageFormik";
import { Message } from "../components/ForgotPassword/Message";

export const ForgotPassword = () => {
  const [resetPassword, setResetPassword] = useState(false);

  const formik = useMessageFormik({
    onSubmit(values, formikHelpers) {},
  });

  const handleResetPassword = () => setResetPassword(true);

  return (
    <>
      {resetPassword ? (
        <Message values={formik.values} />
      ) : (
        <ForgotPasswordForm
          onResetPassword={handleResetPassword}
          formik={formik}
        />
      )}
    </>
  );
};
