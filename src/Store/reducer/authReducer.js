const INITIALSTATE = {
  userName: "",
  userPassword: "",
  isLogged: false,
};

const loginReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      console.log("actiom", action.type);
      return {
        ...state,
        userName: action.payload.name,
        userPassword: action.payload.password,
      };
    default:
      return state;
  }
};
const isLoggedReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      console.log("actiom", action.type);
      return {
        ...state,
        userName: action.payload.name,
        userPassword: action.payload.password,
      };
    default:
      return state;
  }
};

export { loginReducer, isLoggedReducer };
