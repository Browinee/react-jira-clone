import React from "react";
import { Table } from "antd";
import { TableProps } from "antd/es/table";

import { User } from "types/user";
import { Project } from "../../../types/project";
import dayjs from "dayjs";

interface ListProps extends TableProps<Project> {
  users: User[];
}

const generateTableColumn = (users: User[]) => [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    render(value: any, project: any) {
      return <div>{project.name}</div>;
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
  return (
    <Table
      rowKey={"id"}
      pagination={false}
      columns={generateTableColumn(users)}
      {...props}
    />
  );
};
