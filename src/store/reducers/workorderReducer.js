const initState = {};

const workorderReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_WORKORDER":
      console.log("created workorder", action.workorder);
      return state;
    case "CREATE_WORKORDER_ERROR":
      console.log("create workorder error", action.err);
      return state;
    case "COMPLETE_WORKORDER":
      console.log("complete workorder", action.workorder);
      return state;
    case "COMPLETE_WORKORDER_ERROR":
      console.log("complete workorder error", action.err);
      return state;
    case "RECREATE_WORKORDER":
      console.log("recreate workorder", action.workorder);
      return state;
    case "RECREATE_WORKORDER_ERROR":
      console.log("recreate workorder error", action.err);
      return state;
    case "RESTORE_WORKORDER":
      console.log("recreate workorder", action.workorder);
      return state;
    case "RESTORE_WORKORDER_ERROR":
      console.log("recreate workorder error", action.err);
      return state;
    case "DELETE_WORKORDER":
      console.log("delete workorder", action.id);
      return state;
    case "DELETE_WORKORDER_ERROR":
      console.log("delete workorder error", action.err);
      return state;
    case "HOLD_WORKORDER":
      console.log("hold workorder", action.workorder);
      return state;
    case "HOLD_WORKORDER_ERROR":
      console.log("hold workorder error", action.err);
      return state;
    default:
      return state;
  }
};

export default workorderReducer;
