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
    run(getProjects());
  }, [param]);
  console.log("result", result);
  return result;
};

export default useProjects;
