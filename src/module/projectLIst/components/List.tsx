import React from "react";
import { Table } from "antd";
import { TableProps } from "antd/es/table";

import { User } from "types/user";
import { Project } from "../../../types/project";



interface ListProps extends TableProps<Project> {
  users: User[];
}

const Table_Column = [
  {
    title: "Name",
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    render(value: any, project: any) {
      return <div>{project.name}</div>;
    }
  },
  {
    title: "Department",
    dataIndex: "department"
  },
  {
    title: "Owner",
    render(value: any, project: any) {
      return (
        <span>
              unknown
              </span>
      );
    }
  },
  {
    title: "Create Time",
    render(value: any, project: any) {
      return (
        <span>
                {project.created
                  ? project.created
                  : "--"}
              </span>
      );
    }
  }

];
export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      rowKey={"id"}
      pagination={false}
      columns={Table_Column}
      {...props}
    />
  );
};
