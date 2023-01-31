import { useQuery } from "react-query";
import { getAllProducts } from "../api/products/products.client";
import { CircularProgress } from "@mui/material";

import { ErrorMessage } from "../components/shared/ErrorMessage";
import { ProductsTable } from "../components/Products/ProductsTable";

export const Products = () => {
  const { data, isLoading, error } = useQuery("products", getAllProducts);
  console.log(data?.data.products);
  return (
    <div>
      <h1 style={{ marginBottom: "30px" }}>Products</h1>

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
          <ErrorMessage message="The request to retrive products failed, please try again!" />
        )}
      </>

      {data && <ProductsTable data={data.data.products} />}
    </div>
  );
};
