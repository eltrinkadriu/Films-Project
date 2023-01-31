import { apiRequest } from "../Api";
import { Product, ProductResponse } from "./products";

export const getAllProducts = () =>
  apiRequest<{}, ProductResponse>({ url: "products" });

export const getSingleProduct = (id: number) =>
  apiRequest<{}, Product>({ url: `product/${id}` });
