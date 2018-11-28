export const createWorkorder = workorder => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    let newCount = profile.createdOrderCount + 1;

    firestore
      .collection("workorders")
      .add({
        ...workorder,
        workorderNumber:
          "#" + profile.routeNumber + ("0000000" + newCount).slice(-7),
        requesterFirstName: profile.firstName,
        requesterLastName: profile.lastName,
        requesterId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_WORKORDER", workorder });
      })
      .catch(err => {
        dispatch({ type: "CREATE_WORKORDER_ERROR", err });
      })
      .then(
        firestore
          .collection("users")
          .doc(authorId)
          .update({
            createdOrderCount: newCount
          })
      );
  };
};
