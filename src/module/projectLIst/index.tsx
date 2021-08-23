import { useEffect, useState } from "react";
import { SearchPanel } from "./components/SearchPanel";
import { List } from "./components/List";
import useDebounce from "../../hook/useDebounce";
import useMount from "../../hook/useMount";
import useProjects from "../../hook/useProjects";
import useUsers from "../../hook/useUsers";
import { Typography } from "antd";

const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 200);
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();
  return (
    <div>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
      ) : null}
      <List users={users || []} dataSource={list || []} loading={isLoading} />
    </div>
  );
};

export default ProjectList;
