import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

function useUrlQueryParam<T extends string>(keys: T[]) {
  const [searchParams, setSearchParams] = useSearchParams({});
  const query = useMemo(() => {
    return keys.reduce((prev, key) => {
      return {
        ...prev,
        [key]: searchParams.get(key) || "",
      };
    }, {}) as { [key in T]: string };
    // eslint-disable-next-lin react-hooks/exhaustive-deps
  }, [searchParams]);
  return [query, setSearchParams] as const;
}

export default useUrlQueryParam;
