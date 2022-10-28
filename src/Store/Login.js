import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, ProtectedRoutBoolean } from "./action/authAction";
import { loginReducer, isLoggedReducer } from "./reducer/authReducer";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginReducer);
  const isLoged = useSelector((state) => state.isLoggedReducer);
  console.log("isLoggedReducer", isLoged);
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(ProtectedRoutBoolean(true));
    console.log(name, password);
    dispatch(loginAction({ name, password }));
    console.log("state", state);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{
        height: "100vh",
      }}
    >
      <form onSubmit={formHandler} className=" w-100">
        <input
          type="text"
          className="d-block p-3 my-3 w-50 mx-auto rounded"
          placeholder="Enter Your Name"
          style={{
            outline: "none",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            border: "none",
          }}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="Password"
          className="d-block my-5 p-3 w-50 mx-auto rounded"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            outline: "none",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            border: "none",
          }}
        />
        <button className="btn btn-primary d-block mx-auto w-25">Login</button>
      </form>
    </div>
  );
};

export default Login;
