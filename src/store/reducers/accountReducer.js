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
