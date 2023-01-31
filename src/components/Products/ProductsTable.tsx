import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Product } from "../../api/products/products";

interface Props {
  data: Product[];
}

export const ProductsTable = ({ data }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "18px", fontWeight: "bold" }}>
              ID
            </TableCell>
            <TableCell
              sx={{ fontSize: "18px", fontWeight: "bold" }}
              align="center"
            >
              Title
            </TableCell>
            <TableCell
              sx={{ fontSize: "18px", fontWeight: "bold" }}
              align="left"
            >
              Description
            </TableCell>
            <TableCell
              sx={{ fontSize: "18px", fontWeight: "bold" }}
              align="right"
            >
              Price
            </TableCell>
            <TableCell
              sx={{ fontSize: "18px", fontWeight: "bold" }}
              align="right"
            >
              Stock
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="product">
                {product.id}
              </TableCell>
              <TableCell align="center">{product.title}</TableCell>
              <TableCell align="left">{product.description}</TableCell>
              <TableCell align="right">{product.price}$</TableCell>
              <TableCell align="right">{product.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
