import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AuthenticatedApp, UnAuthenticatedApp } from "./module/auth";
import { useAuth } from "./context/auth-context";
import { ErrorBoundary } from "./components/ErrorBoundary";
import FullPageErrorFallback from "./components/FullPageErrorFallback";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
