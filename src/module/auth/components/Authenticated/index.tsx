import React from "react";
import styled from "@emotion/styled";
import Row from "../../../../components/Row";
import ProjectList from "../../../projectLIst";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import { useAuth } from "../../../../context/auth-context";

const Authenticated = () => {
  const {logout, user} = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={"18rem"} color={'rgb(38.132, 255)'}/>
          <h2>項目</h2>
          <h2>用戶</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={<Menu>
             <Menu.Item key={"logout"}>
               <Button type={"link"}>Logout</Button>
             </Menu.Item>
          </Menu>}>
            <Button type={"link"} href="" onClick={e => e.preventDefault()}>
              Hi, {user?.name}
            </Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectList />
      </Main>
    </Container>
  )
}

export default Authenticated;





const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  display: flex;
  overflow: hidden;
`;