import React, { FormEvent } from "react";

function Login() {
  const login = () => {}
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("event.current", event.currentTarget);
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[0] as HTMLInputElement).value;
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id={"password"} />
      </div>
      <button type={"submit"}>Login</button>
    </form>
  );
}

export default Login;
