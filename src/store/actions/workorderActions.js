export const addAccountToStore = option => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(option);
    console.log(authorId);

    firestore
      .collection("accounts_" + authorId)
      .add({
        id: option.value,
        name: option.label
      })
      .then(() => {
        dispatch({ type: "ADD_ACCOUNT", option });
      })
      .catch(err => {
        dispatch({ type: "ADD_ACCOUNT_ERROR", err });
      });
  };
};

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
      )
      .then(
        firestore
          .collection("accounts_" + authorId)
          .doc(workorder.accountId)
          .set(
            {
              name: workorder.account
            },
            { merge: true }
          )
      );
  };
};
