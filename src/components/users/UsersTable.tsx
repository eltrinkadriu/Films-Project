import { useNavigate } from "react-router-dom";
import { User } from "../../api/users/users";

import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";

interface Props {
  data: User[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    align: "left",
    headerAlign: "left",
    width: 90,
  },
  { field: "gender", headerName: "Gender", width: 90 },
  { field: "email", headerName: "Email", width: 220 },
  { field: "birthday", headerName: "Birthday", width: 130 },
  { field: "jobTitle", headerName: "Job Title", width: 220 },
];

export const UsersTable = ({ data }: Props) => {
  const navigate = useNavigate();

  const rows = data.map((user) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      email: user.email,
      birthday: user.birthDate,
      jobTitle: user.company.title,
    };
  });

  const handleDoubleClick: GridEventListener<"rowDoubleClick"> = (params) => {
    navigate({
      pathname: `/users/${params.row.id}`,
    });
  };

  return (
    <div style={{ height: 630, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onRowDoubleClick={handleDoubleClick}
      />
    </div>
  );
};
