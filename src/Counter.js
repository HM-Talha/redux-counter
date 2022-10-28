import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCounterAction, MinusCounter } from "./Store/action/counterAction";
import { ProtectedRoutBoolean } from "./Store/action/authAction";
// import { AddCounterAction, MinusCounter } from "./Store/action/counterAction.";
const Counter = () => {
  let [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const { counterReducer } = useSelector((state) => state);
  // console.log("selector", counterReducer);
  return (
    <>
      <div className="bg-dark m-0 p-5 d-flex justify-content-center">
        <button
          className="btn btn-info px-5 py-3 fs-4 fw-bold w-25 text-white"
          onClick={() => dispatch(ProtectedRoutBoolean(false))}
        >
          Logout
        </button>
      </div>
      <div
        className="m-0  bg-dark d-flex justify-content-center align-items-center "
        style={{
          height: "87vh",
        }}
      >
        <div className="text-center w-100 text-white">
          <p className="fs-1">Counter : {counterReducer.globalCounter}</p>
          <button
            className="d-inline-block fs-4 my-5 w-25 mx-3 btn btn-primary"
            onClick={() => dispatch(AddCounterAction())}
          >
            +
          </button>
          <button
            className="d-inline-block fs-4 w-25 btn btn-success"
            onClick={() => dispatch(MinusCounter())}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
