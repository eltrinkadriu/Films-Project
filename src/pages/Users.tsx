import { useQuery } from "react-query";
import { getAllUsers } from "../api/users/users.client";
import { UsersTable } from "../components/users/UsersTable";
import { ErrorMessage } from "../components/shared/ErrorMessage";
import { CircularProgress } from "@mui/material";

export const Users = () => {
  const { data, isLoading, error } = useQuery("users", getAllUsers);
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ marginBottom: "30px" }}>Users</h1>

      {isLoading && (
        <CircularProgress
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "150px",
            height: "150px",
          }}
        />
      )}

      <>
        {error && (
          <ErrorMessage message="The request to load users failed, please try again!" />
        )}
      </>

      {data && <UsersTable data={data.data.users} />}
    </div>
  );
};
