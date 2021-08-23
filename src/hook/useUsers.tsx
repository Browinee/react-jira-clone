import { useEffect } from "react";
import { useHttp } from "../utils/http";
import useAsync from "./useAsync";
import { User } from "../types/user";
import { cleanObject } from "../utils";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [param]);
  return result;
};
export default useUsers;
