import { ReactNode } from "react";
import { SearchPanel } from "./components/SearchPanel";
import { List } from "./components/List";

 const ProjectList = ({children}: {children?: ReactNode}) => {
  return (
    <div>
     <SearchPanel users={[]} param={{}} setParam={() => {}} />
     <List  users={[]} dataSource={[]} />
    </div>
  )
}

export default ProjectList
