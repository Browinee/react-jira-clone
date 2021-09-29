import React from "react";
import IdSelect, { IdSelectProps } from "../id-select";
import useUsers from "../../hook/useUsers";
function UserSelect(props: React.ComponentProps<typeof IdSelect>) {
  const { data: users } = useUsers();
  return <IdSelect options={users || []} {...props} />;
}

export default UserSelect;
