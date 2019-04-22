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
    case "CREATE_DRAFT":
      console.log("created draft", action.stripset);
      return state;
    case "CREATE_DRAFT_ERROR":
      console.log("create draft error", action.err);
      return state;
    case "COMPLETE_STRIPORDER":
      console.log("complete striporder", action.stripset);
      return state;
    case "COMPLETE_STRIPORDER_ERROR":
      console.log("complete striporder error", action.err);
      return state;
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
    case "DELETE_STRIPORDER":
      console.log("delete striporder", action.id);
      return state;
    case "DELETE_STRIPORDER_ERROR":
      console.log("delete striporder error", action.err);
      return state;
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
