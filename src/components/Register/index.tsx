import React from "react";
import { Button, Form, Input } from "antd";

interface SubmitProps {
  username: string;
  password: string;
}

interface RegisterProps {
  register: (value: SubmitProps) => void;
}

export const Register = (props: RegisterProps) => {
  const { register } = props;
  const handleSubmit = (values: SubmitProps) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "Please enter username" }]}
      >
        <Input placeholder={"username"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "Please enter password" }]}
      >
        <Input placeholder={"password"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item
        name={"cpassword"}
        rules={[{ required: true, message: "Please confirm password" }]}
      >
        <Input placeholder={"Please confirm password"} type="password" id={"cpassword"} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
