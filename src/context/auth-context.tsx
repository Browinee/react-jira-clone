import React, { ReactNode, useCallback, useContext, useState } from "react";
import * as auth from "../module/auth/auth-provider";
import { AuthForm } from "../module/auth/auth-provider";
import { http } from "../utils/http";
import useMount from "../hook/useMount";
import { User } from "../types/user";
import useAsync from "../hook/useAsync";
import Loading from "../components/Loading";
import FullPageErrorFallback from "../components/FullPageErrorFallback";

interface AuthContext {
  user: User | null;
  login: (form: AuthForm) => void;
  register: (form: AuthForm) => void;
  logout: () => void;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

const AuthContext = React.createContext<AuthContext | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser,
  } = useAsync<User | null>();
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));
  useMount(
    useCallback(() => {
      run(bootstrapUser());
    }, [])
  );
  if (isIdle || isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context must be under AuthProvider");
  }
  return context;
};
