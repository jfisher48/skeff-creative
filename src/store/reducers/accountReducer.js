const initState = {};

const accountReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      console.log("added account", action.option);
      return state;
    case "ADD_ACCOUNT_ERROR":
      console.log("add account error", action.err);
      return state;
    default:
      return state;
  }
};

export default accountReducer;
