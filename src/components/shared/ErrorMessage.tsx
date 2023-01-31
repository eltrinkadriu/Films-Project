import { Alert } from "@mui/material";

type Props = {
  message: string;
};

export const ErrorMessage = (props: Props) => {
  return <Alert severity="error">{props.message}</Alert>;
};
