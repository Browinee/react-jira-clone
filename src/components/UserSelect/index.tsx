import React from "react";
import { Select } from "components/Select";
import useUsers from "../../hook/useUsers";


type a  = React.ComponentProps<typeof Select>
export const UserSelect = (props: React.ComponentProps<typeof Select>) => {
  const { data: users } = useUsers();
  return <Select options={users || []} {...props} />;
};
