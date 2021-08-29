import { useHttp } from "../utils/http";
import { cleanObject } from "../utils";
import { Project } from "../types/project";
import useAsync from "./useAsync";
import { useEffect } from "react";

const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();
  const getProjects = () => client("projects", { data: cleanObject(param) });
  useEffect(() => {
    run(getProjects(), {retry: getProjects});
  }, [param]);
  return result;
};

export default useProjects;

export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync();

  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(client(`projects/${params.id}`, {
      data: params,
      method: "PATCH"
    }));
  };
  return {
    mutate,
    ... asyncResult
  };
};

export const useAddProject = () => {
  const { run, ...asyncResult } = useAsync();

  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(client(`projects/${params.id}`, {
      data: params,
      method: "POST"
    }));
  };
  return {
    mutate,
    ... asyncResult
  };
};
