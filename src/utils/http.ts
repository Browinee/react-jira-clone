import * as auth from "../module/auth/auth-provider";
import { useAuth } from "../context/auth-context";
import { useCallback } from "react";
import qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
console.log("apiUrl", process.env);

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

const handleResponse = async (response: Response) => {
  if (response.status === 401) {
    await auth.logout();
    window.location.reload();
    return Promise.reject({ message: "Please login again" });
  }
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
};
export const http = (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(handleResponse);
};

export const useHttp = () => {
  const { user } = useAuth();
  return useCallback(
    (...[endpoint, config]: Parameters<typeof http>) =>
      http(endpoint, { ...config, token: user?.token }),
    [user?.token]
  );
};
