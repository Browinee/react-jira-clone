import React, { ChangeEvent } from "react";
import { Form, Input } from "antd";
import { User } from "../../../types/user";
import UserSelect from "../../../components/UserSelect";

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: number | undefined;
  };
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
        <UserSelect
          defaultOptionName={"Owner"}
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value,
            });
          }}
        />
      </Form.Item>
    </Form>
  );
};
