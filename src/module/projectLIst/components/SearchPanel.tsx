import React, { ChangeEvent } from "react";
import { Form, Input } from "antd";
import { User } from "../../../types/user";
import { Project } from "../../../types/project";
import { UserSelect } from "../../../components/UserSelect";

interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name"|"personId">>
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
          defaultOptionName={"owner"}
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        />
      </Form.Item>
    </Form>
  );
};
