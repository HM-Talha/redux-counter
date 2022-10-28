const loginAction = (data) => {
  console.log("data", data);
  return (dispatch) => {
    dispatch({
      type: "LOGIN_ACTION",
      payload: data,
    });
  };
};

const ProtectedRoutBoolean = (isLogged) => {
  console.log("isLoged", isLogged );
  return (dispatch) => {
    dispatch({
      type: "ISLOGGED_BOOLEAN",
      payload: isLogged,
    });
  };
};
export { loginAction, ProtectedRoutBoolean };
