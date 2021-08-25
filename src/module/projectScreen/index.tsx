import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Kanban from "../Kanban";
import Epic from "../Epic";
const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={"kanban"}>kanban</Link>
      <Link to={"epic"}>Epic</Link>
      <Routes>
        <Route path={"kanban"} element={<Kanban />} />
        <Route path={"epic"} element={<Epic />} />
        <Navigate to={window.location.pathname + "/kanban"} />
      </Routes>
    </div>
  );
};

export default ProjectScreen;
