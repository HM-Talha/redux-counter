import { combineReducers } from "redux";
// import { AddCounterAction, MinusCounter } from "../action/counterAction";
import { counterReducer } from "./counterReduce";
import { loginReducer } from "./authReducer";

const combineReducer = combineReducers({
  counterReducer: counterReducer,
  loginReducer: loginReducer,
});

export default combineReducer;
