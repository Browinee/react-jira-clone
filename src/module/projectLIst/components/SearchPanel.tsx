import React, { ChangeEvent } from "react";
import { Form, Input, Select } from "antd";
import { User } from "../../../types/user";

interface SearchPanelProps {
  users: User[];
  param: any;
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setParam({
      ...param,
      name: evt.target.value,
    });
  };
  return (
    <Form style={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        <Input
          placeholder={"Task Name"}
          type="text"
          value={param.name}
          onChange={changeHandler}
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={""}>Owner</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
