import { Button } from "@mui/material";
import { User } from "../../api/users/users";

interface Props {
  data: User;
  onNextUser: () => void;
  onPrevUser: () => void;
}

export const UserDetails = ({ data, onNextUser, onPrevUser }: Props) => {
  return (
    <div style={{ padding: "10px" }}>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      <p>Email: {data.email}</p>
      <p>Birthday: {data.birthDate}</p>
      <p style={{ marginBottom: "10px" }}>Job Title: {data.company.title}</p>
      <Button
        sx={{ color: "#fff" }}
        variant="contained"
        onClick={onPrevUser}
        disabled={data.id == 1}
      >
        Prev User
      </Button>
      <Button
        sx={{ color: "#fff" }}
        variant="contained"
        onClick={onNextUser}
        disabled={data.id == 30}
      >
        Next User
      </Button>
    </div>
  );
};
