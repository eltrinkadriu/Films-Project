import { apiRequest } from "../Api";
import { User, UsersResponse } from "./users";

export const getAllUsers = () =>
  apiRequest<{}, UsersResponse>({ url: "users" });

export const getSingleUser = (id: number) =>
  apiRequest<{}, User>({ url: `users/${id}` });
