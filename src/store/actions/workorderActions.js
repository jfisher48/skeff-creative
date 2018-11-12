export const createWorkorder = workorder => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    var dueDate = new Date(Date.now() + 172800000);
    var d = new Date();
    var n = d.getDay();
    if (n === 4) {
      dueDate = new Date(Date.now() + 345600000);
    } else if (n === 5) {
      dueDate = new Date(Date.now() + 432000000);
    } else if (n === 6) {
      dueDate = new Date(Date.now() + 432000000);
    } else if (n === 0) {
      dueDate = new Date(Date.now() + 345600000);
    }

    firestore
      .collection("workorders")
      .add({
        ...workorder,
        requesterFirstName: "Tim",
        requesterLastName: "Crawley",
        createdAt: new Date(),
        dueDate: dueDate
      })
      .then(() => {
        dispatch({ type: "CREATE_WORKORDER", workorder });
      })
      .catch(err => {
        dispatch({ type: "CREATE_WORKORDER_ERROR", err });
      });
  };
};
