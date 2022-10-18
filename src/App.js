import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCounterAction, MinusCounter } from "./Store/action/counterAction";
// import { AddCounterAction, MinusCounter } from "./Store/action/counterAction.";
function App() {
  let [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const { counterReducer } = useSelector((state) => state);
  console.log("selector", counterReducer);

  return (
    <>
      <div
        className="border  bg-warning d-flex justify-content-center align-items-center "
        style={{
          height: "100vh",
        }}
      >
        <div className="text-center w-100">
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
}

export default App;
