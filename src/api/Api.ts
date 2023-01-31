import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function apiRequest<D = {}, R = unknown>({
  url,
  ...options
}: AxiosRequestConfig) {
  return await Axios.request<D, AxiosResponse<R>>({
    ...options,
    url: `${import.meta.env.VITE_API_URL}/${url}`,
  });
}
