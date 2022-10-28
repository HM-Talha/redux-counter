import { combineReducers } from "redux";
// import { AddCounterAction, MinusCounter } from "../action/counterAction";
import { counterReducer } from "./counterReduce";
import { loginReducer, isLoggedReducer } from "./authReducer";

const combineReducer = combineReducers({
  counterReducer: counterReducer,
  loginReducer: loginReducer,
  isLoggedReducer: isLoggedReducer,
});

export default combineReducer;
