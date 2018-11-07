export const createWorkorder = workorder => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    //const dueDate = new Date(Date.now() + 172800000);
    firestore
      .collection("workorders")
      .add({
        ...workorder,
        requesterFirstName: "Tim",
        requesterLastName: "Crawley",
        createdAt: new Date()
        // dueDate: dueDate
      })
      .then(() => {
        dispatch({ type: "CREATE_WORKORDER", workorder });
      })
      .catch(err => {
        dispatch({ type: "CREATE_WORKORDER_ERROR", err });
      });
  };
};
