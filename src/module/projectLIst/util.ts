import useUrlQueryParam from "../../hook/useUrlQueryParam";
import { useCallback, useMemo } from "react";

export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  const setSearchParam = useCallback(
    (param: { name: string; personId: number | undefined }) => {
      const newParam = {
        name: param.name,
        personId: param.personId === undefined ? "" : String(param.personId),
      };
      setParam(newParam);
    },
    [setParam]
  );
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setSearchParam,
  ] as const;
};
