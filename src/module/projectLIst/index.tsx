import { useEffect, useState } from "react";
import { SearchPanel } from "./components/SearchPanel";
import { List } from "./components/List";
import useDebounce from "../../hook/useDebounce";
import { useHttp } from "../../utils/http";
import useMount from "../../hook/useMount";
import { cleanObject } from "../../utils";

const ProjectList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [param, setParam] = useState({
    name: "",
    personId: ""
  });
  const debouncedParam = useDebounce(param, 200);
  const [list, setList] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject((debouncedParam)) }).then(setList);
  }, [debouncedParam]);
  useMount(() => {
    // client("users").then(setUsers);
  });
  return (
    <div>
      <SearchPanel users={[]} param={{}} setParam={() => {
      }} />
      <List users={[]} dataSource={[]} loading={isLoading}/>
    </div>
  );
};

export default ProjectList;
