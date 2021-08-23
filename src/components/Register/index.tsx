import React from "react";
import { Button, Form, Input } from "antd";
import { LongButton } from "../Button";
import useAsync from "../../hook/useAsync";

interface SubmitProps {
  username: string;
  password: string;
  cpassword: string;
}

interface RegisterProps {
  register: (value: SubmitProps) => Promise<void>;
  onError: (error: Error | null) => void;
}

export const Register = (props: RegisterProps) => {
  const { register, onError } = props;
  const { isLoading, run } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = async (values: SubmitProps) => {
    if (values.cpassword !== values.password) {
      onError(new Error("Please make sure two passwords are the same."));
      return;
    }
    try {
      await run(register(values));
    } catch (e) {
      onError(e);
    }
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
        rules={[{ required: true, message: "Please enter confirmed password" }]}
      >
        <Input
          placeholder={"Please enter confirmed password"}
          type="password"
          id={"cpassword"}
        />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} type="primary" htmlType="submit">
          Register
        </LongButton>
      </Form.Item>
    </Form>
  );
};

export default Register;
