import React, { ChangeEvent } from "react";
import { Form, Input } from "antd";
import { User } from "../../../types/user";

interface SearchPanelProps {
  users: User[];
  param: any
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // setParam({
    //   ...param,
    //   name: evt.target.value,
    // })
  }
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
    </Form>
  );
};
