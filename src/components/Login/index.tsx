import React from "react";
import { Button, Form, Input } from "antd";

interface SubmitProps {
  username: string;
  password: string;
}
interface LoginProps {
  login: (value: SubmitProps) => void;
}
export const Login = (props: LoginProps) => {
  const {login} = props;
  const handleSubmit = (values: SubmitProps) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "Please enter username" }]}
      >
        <Input placeholder={"Username"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "Please enter password" }]}
      >
        <Input placeholder={"Password"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
