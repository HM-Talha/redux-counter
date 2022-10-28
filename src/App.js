// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AddCounterAction, MinusCounter } from "./Store/action/counterAction";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Counter from "./Counter";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Store/Login";
import { useSelector } from "react-redux";
import { loginAction, ProtectedRoutBoolean } from "./Store/action/authAction";
import { loginReducer, isLoggedReducer } from "./Store/action/authAction";
// import { AddCounterAction, MinusCounter } from "./Store/action/counterAction.";
function App() {
  const isLoged = useSelector((state) => state.isLoggedReducer);
  console.log("isLoged", isLoged);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route element={<ProtectedRoutes />} isLogged={false}> */}
          <Route path="/counter" element={<Counter />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
