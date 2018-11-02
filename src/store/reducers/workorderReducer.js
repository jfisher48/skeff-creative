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
    default:
      return state;
  }
};

export default workorderReducer;
