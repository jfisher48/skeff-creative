export const createWorkorder = workorder => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    // var d = new Date();
    // var dueDate = setDueDate(d, getState.isRush);

    firestore
      .collection("workorders")
      .add({
        ...workorder,
        requesterFirstName: "Tim",
        requesterLastName: "Crawley",
        createdAt: new Date()
        //dueDate: dueDate
      })
      .then(() => {
        dispatch({ type: "CREATE_WORKORDER", workorder });
      })
      .catch(err => {
        dispatch({ type: "CREATE_WORKORDER_ERROR", err });
      });

    // function setDueDate(date, check) {
    //   var n = date.getDay();
    //   if (n === (1 || n === 2 || n === 3) && check === false) {
    //     dueDate = new Date(Date.now() + 172800000);
    //   } else if (n === 4 && check === false) {
    //     dueDate = new Date(Date.now() + 345600000);
    //   } else if (n === 5 && check === false) {
    //     dueDate = new Date(Date.now() + 432000000);
    //   } else if (n === 6 && check === false) {
    //     dueDate = new Date(Date.now() + 432000000);
    //   } else if (n === 0 && check === false) {
    //     dueDate = new Date(Date.now() + 345600000);
    //   } else {
    //     dueDate = new Date(Date.now() + 86400000);
    //   }

    //   return dueDate;
    // };
  };
};
