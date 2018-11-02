export const createWorkorder = workorder => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("workorders")
      .add({
        ...workorder,
        requesterFirstName: "Tim",
        requesterLastName: "Crawley",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_WORKORDER", workorder });
      })
      .catch(err => {
        dispatch({ type: "CREATE_WORKORDER_ERROR", err });
      });
  };
};
