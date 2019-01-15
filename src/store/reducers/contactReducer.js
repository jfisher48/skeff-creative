const initState = {};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      console.log("created contact", action.contact);
      return state;
    case "CREATE_CONTACT_ERROR":
      console.log("create contact error", action.err);
      return state;
    case "ADD_CONTACT":
      console.log("created contact", action.contact);
      return state;
    case "ADD_CONTACT_ERROR":
      console.log("create contact error", action.err);
      return state;
    default:
      return state;
  }
};

export default contactReducer;
