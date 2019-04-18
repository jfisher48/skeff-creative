const initState = {};

const shelfstripReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_STRIPSET":
      console.log("created stripset", action.stripset);
      return state;
    case "CREATE_STRIPSET_ERROR":
      console.log("create stripset error", action.err);
      return state;
    case "CREATE_PROJECT":
      console.log("created project", action.stripset);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    // case "COMPLETE_WORKORDER":
    //   console.log("complete workorder", action.workorder);
    //   return state;
    // case "COMPLETE_WORKORDER_ERROR":
    //   console.log("complete workorder error", action.err);
    //   return state;
    // case "RECREATE_WORKORDER":
    //   console.log("recreate workorder", action.workorder);
    //   return state;
    // case "RECREATE_WORKORDER_ERROR":
    //   console.log("recreate workorder error", action.err);
    //   return state;
    // case "RESTORE_WORKORDER":
    //   console.log("recreate workorder", action.workorder);
    //   return state;
    // case "RESTORE_WORKORDER_ERROR":
    //   console.log("recreate workorder error", action.err);
    //   return state;
    // case "DELETE_WORKORDER":
    //   console.log("delete workorder", action.id);
    //   return state;
    // case "DELETE_WORKORDER_ERROR":
    //   console.log("delete workorder error", action.err);
    //   return state;
    // case "HOLD_WORKORDER":
    //   console.log("hold workorder", action.workorder);
    //   return state;
    // case "HOLD_WORKORDER_ERROR":
    //   console.log("hold workorder error", action.err);
    //   return state;
    default:
      return state;
  }
};

export default shelfstripReducer;
