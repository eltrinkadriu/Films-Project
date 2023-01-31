import { apiRequest } from "../Api";

export const login = (username: string, password: string) =>
  apiRequest({
    method: "POST",
    url: "auth/login",
    data: { username, password },
  });
