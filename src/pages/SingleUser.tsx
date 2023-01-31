import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUser } from "../api/users/users.client";
import { CircularProgress } from "@mui/material";
import { ErrorMessage } from "../components/shared/ErrorMessage";
import { UserDetails } from "../components/users/UserDetails";

export const SingleUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(["user", id], () =>
    getSingleUser(Number(id))
  );

  const handleNextUser = () => {
    navigate(`/users/${Number(id) + 1}`);
  };

  const handlePrevUser = () => {
    if (Number(id) === 1) {
      return;
    }
    navigate(`/users/${Number(id) - 1}`);
  };

  return (
    <div>
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

      {isError && <ErrorMessage message="User doesn't exist" />}

      {data && (
        <UserDetails
          data={data.data}
          onNextUser={handleNextUser}
          onPrevUser={handlePrevUser}
        />
      )}
    </div>
  );
};
