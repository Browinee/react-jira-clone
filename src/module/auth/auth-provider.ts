import { User } from "../../types/user";


export interface AuthForm {
  username: string;
  password: string
}

const apiUrl = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (data: { username: string; password: string }) => {
  return handleUserResponse({
    user: {
      id: 123123,
      name: "afasdf",
      email: "dd",
      title: "afdasdf",
      organization: "asdfasfdas",
      token: "sfsfdkl"
    }
  });
};
export const logout = async () => {
  return window.localStorage.removeItem(localStorageKey);
};
export const register = async (data: { username: string; password: string }) => {
  return handleUserResponse({
    user: {
      id: 123,
      name: "afasdf",
      email: "dd",
      title: "afdasdf",
      organization: "asdfasfdas",
      token: "sfsfdkl"
    }
  });
};
