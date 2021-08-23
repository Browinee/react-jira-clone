import { useEffect, useState } from "react";
import { SearchPanel } from "./components/SearchPanel";
import { List } from "./components/List";
import useDebounce from "../../hook/useDebounce";
import useMount from "../../hook/useMount";
import useProjects from "../../hook/useProjects";
import useUsers from "../../hook/useUsers";
import { Button, Typography } from "antd";
import Row from "../../components/Row";
import styled from "@emotion/styled";

const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 200);
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();
  return (
    <ScreenContainer>
      <Row marginBottom={2} between={true}>
        <h1>Item List</h1>
        <Button onClick={() => {}} type={"link"}>
          Create Item
        </Button>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
      ) : null}
      <List users={users || []} dataSource={list || []} loading={isLoading} />
    </ScreenContainer>
  );
};

export default ProjectList;

export const ScreenContainer = styled.div`
  padding: 3.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
