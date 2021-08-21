import * as auth from "../module/auth/auth-provider";
import { useAuth } from "../context/auth-context";
const apiUrl = process.env.REACT_APP_API_URL;


interface Config extends RequestInit {
  token?: string;
  data?: object;
}

const handleResponse = async (response: Response) => {
  if (response.status === 401) {
    await auth.logout();
    window.location.reload();
    return Promise.reject({message: "Please login again"});
  }
  const data = await response.json();
  if(response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}
export const http = (endpoint: string, { data, token, headers, ...customConfig }: Config) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  return window.fetch(`${apiUrl}/${endpoint}`, config)
    .then(handleResponse);
};


export const useHttp = () => {
  const user = useAuth();

}

