import React, { useState } from "react";
import Login from "../../components/Login";
import { Button } from "antd";
import Register from "../../components/Register";
import { register } from "./auth-provider";

const UnAuthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  const login = () => {
  };
  const register = () => {
  };
  const switchHandler = () => setIsRegister(!isRegister);
  return <div>
    {isRegister ?  <Login login={login} /> : <Register register={register}/>}
    <Button type="primary" htmlType="submit" onClick={switchHandler}>
      Switch {isRegister ? "Login" : "Register"}
    </Button>
  </div>;

};

export default UnAuthenticatedApp;
