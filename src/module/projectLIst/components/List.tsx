import React from "react";
import { Table } from "antd";
import { TableProps } from "antd/es/table";
import { User } from "types/user";
import { Project } from "../../../types/project";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Pin from "../../../components/Pin";
import { useEditProject } from "../../../hook/useProjects";

interface ListProps extends TableProps<Project> {
  users: User[];
  refresh?: () => void;
}

const generateTableColumn = (users: User[], mutate: (param: Partial<Project>) => Promise<any>, refresh?: () => void) => {

  const pinProject = (id: number) => (pin: boolean) => mutate({ id, pin }).then(refresh);
  return [
    {
      title: <Pin checked disabled />,
      render(value: any, project: any) {
        console.log("value", { value, project });
        return (
          <Pin
            checked={project.pin}
            onCheckedChange={pinProject(project.id)}
          />
        );
      }
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      render(value: any, project: any) {
        return <Link to={String(project.id)}>{project.name}</Link>;
      }
    },
    {
      title: "Department",
      dataIndex: "organization"
    },
    {
      title: "Owner",
      render(value: any, project: any) {
        return (
          <span>
          {users.find((user) => user.id === project.personId)?.name || "未知"}
        </span>
        );
      }
    },
    {
      title: "Create Time",
      render(value: any, project: any) {
        return (
          <span>
          {project.created ? dayjs(project.created).format("YYYY-MM-DD") : "--"}
        </span>
        );
      }
    }
  ];
};
export const List = ({ users, refresh, ...props }: ListProps) => {
  const { mutate } = useEditProject();

  return (
    <Table
      rowKey={"id"}
      pagination={false}
      columns={generateTableColumn(users, mutate, refresh)}
      {...props}
    />
  );
};
