// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AddCounterAction, MinusCounter } from "./Store/action/counterAction";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Counter from "./Counter";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Store/Login";

// import { AddCounterAction, MinusCounter } from "./Store/action/counterAction.";
function App() {
  // let [counter, setCounter] = useState(0);
  // const dispatch = useDispatch();
  // const { counterReducer } = useSelector((state) => state);
  // console.log("selector", counterReducer);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />} isLogged={true}>
            <Route path="/counter" element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
