import { useState } from "react";
import { SearchPanel } from "./components/SearchPanel";
import { List } from "./components/List";
import useDebounce from "../../hook/useDebounce";
import useProjects from "../../hook/useProjects";
import useUsers from "../../hook/useUsers";
import { Button, Typography } from "antd";
import Row from "../../components/Row";
import styled from "@emotion/styled";
import useDocumentTitle from "../../hook/useDocumentTitle";
import useProjectsSearchParams from "./hook/useProjectsSearchParams";

const ProjectList = () => {
  const [param, setParam] = useProjectsSearchParams();
  const { isLoading, error, data: list, retry } = useProjects(useDebounce(param, 200));
  const { data: users } = useUsers();
  useDocumentTitle("Item List", false);
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
      <List refresh={retry} users={users || []} dataSource={list || []} loading={isLoading} />
    </ScreenContainer>
  );
};
ProjectList.whyDiDYouRender = true;
export default ProjectList;

export const ScreenContainer = styled.div`
  padding: 3.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
