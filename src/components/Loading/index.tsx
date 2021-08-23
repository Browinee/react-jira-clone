import styled from "@emotion/styled";
import { Spin } from "antd";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <FullPage>
    <Spin size={"large"} />
  </FullPage>
);

export default Loading;
