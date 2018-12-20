const initState = {
  // workorders: [
  //   {
  //     id: "1",
  //     account: "Casey's Paris",
  //     requestor: "Tim Crawley",
  //     content: "$9.99 12 Pk Bud Light Case Card"
  //   },
  //   {
  //     id: "2",
  //     account: "Brazas Liquor Store",
  //     requestor: "Tim Crawley",
  //     content: "$9.99 12 Pk Bud Light Case Card"
  //   },
  //   {
  //     id: "3",
  //     account: "My Brothers",
  //     requestor: "Tim Crawley",
  //     content: "$9.99 12 Pk Bud Light Case Card"
  //   }
  // ]
};

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
    case "DELETE_ORIGINAL":
      console.log("delete workorder", action.workorder);
      return state;
    case "DELETE_WORKORDER_ERROR":
      console.log("delete workorder error", action.err);
      return state;
    case "PROCESS_COMPLETE":
      console.log("process complete", action.workorder);
      return state;
    case "PROCESS_COMPLETE_ERROR":
      console.log("process complete error", action.err);
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
