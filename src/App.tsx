import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AuthenticatedApp, UnAuthenticatedApp } from "./module/auth";
import { useAuth } from "./context/auth-context";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
}

export default App;
