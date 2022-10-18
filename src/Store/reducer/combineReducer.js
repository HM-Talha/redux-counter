import { combineReducers } from "redux";
// import { AddCounterAction, MinusCounter } from "../action/counterAction";
import { counterReducer } from "./counterReduce";

const combineReducer = combineReducers({
    counterReducer: counterReducer,
//   MinusCounter: MinusCounter,
});

export default combineReducer;
