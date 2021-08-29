import useUrlQueryParam from "../../../hook/useUrlQueryParam";
import { useMemo } from "react";

function useProjectsSearchParams() {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
}

export default useProjectsSearchParams;
