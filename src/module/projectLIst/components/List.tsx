import React from "react";
import { Table } from "antd";
import { TableProps } from "antd/es/table";

import { User } from "types/user";
import { Project } from "../../../types/project";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

interface ListProps extends TableProps<Project> {
  users: User[];
}

const generateTableColumn = (users: User[]) => [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    render(value: any, project: any) {
      return <Link to={String(project.id)}>{project.name}</Link>;
    },
  },
  {
    title: "Department",
    dataIndex: "organization",
  },
  {
    title: "Owner",
    render(value: any, project: any) {
      return (
        <span>
          {users.find((user) => user.id === project.personId)?.name || "未知"}
        </span>
      );
    },
  },
  {
    title: "Create Time",
    render(value: any, project: any) {
      return (
        <span>
          {project.created ? dayjs(project.created).format("YYYY-MM-DD") : "--"}
        </span>
      );
    },
  },
];
export const List = ({ users, ...props }: ListProps) => {
  console.log("generateTableColumn(users)", generateTableColumn(users));
  console.log("users",  {users, props});
  return (
    <Table
      rowKey={"id"}
      pagination={false}
      columns={generateTableColumn(users)}
      {...props}
    />
  );
};
