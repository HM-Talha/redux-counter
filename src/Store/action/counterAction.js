const AddCounterAction = () => {
  return (dispatch) => {
    console.log("ADD COUNTER ACTION");
    dispatch({
      type: "ADD_COUNTER",
    });
  };
};
const MinusCounter = () => {
  return (dispatch) => {
    console.log("MINUS_COUNTER ACTION");
    dispatch({
      type: "MINUS_COUNTER",
    });
  };
};

export { AddCounterAction, MinusCounter };
