export const createWorkorder = workorder => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    let newCount = profile.createdOrderCount + 1;

    firestore
      .collection("workorders")
      .doc(profile.routeNumber + ("0000000" + newCount).slice(-7))
      .set({
        ...workorder,
        workorderNumber: profile.routeNumber + ("0000000" + newCount).slice(-7),
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
          .collection("accounts")
          .doc(workorder.accountId)
          .set(
            {
              name: workorder.account,
              userId: authorId
            },
            { merge: true }
          )
      );
  };
};

export const completeWorkorder = (workorder, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    //const profile = getState().firebase.profile;
    //const authorId = getState().firebase.auth.uid;

    //let newCount = profile.createdOrderCount + 1;

    firestore
      .collection("completed_workorders")
      .doc(id)
      .set({
        ...workorder,
        completedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "COMPLETE_WORKORDER", workorder });
      })
      .catch(err => {
        dispatch({ type: "COMPLETE_WORKORDER_ERROR", err });
      });
  };
};

export const deleteWorkorder = (collection, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection(collection)
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_WORKORDER", id });
      })
      .catch(err => {
        dispatch({ type: "DELETE_WORKORDER_ERROR", err });
      });
  };
};

export const recreateWorkorder = (workorder, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    firestore
      .collection("workorders")
      .doc(id)
      .set(
        {
          ...workorder,
          completedAt: firebase.firestore.FieldValue.delete()
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: "RECREATE_WORKORDER", workorder });
      })
      .catch(err => {
        dispatch({ type: "RECREATE_WORKORDER_ERROR", err });
      })
      .then(
        firestore
          .collection("completed_workorders")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch(err => {
            console.err("Error removing document: ", err);
          })
      );
  };
};

export const restoreWorkorder = (workorder, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    firestore
      .collection("workorders")
      .doc(id)
      .set(
        {
          ...workorder,
          heldAt: firebase.firestore.FieldValue.delete()
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: "RESTORE_WORKORDER", workorder });
      })
      .catch(err => {
        dispatch({ type: "RESTORE_WORKORDER_ERROR", err });
      })
      .then(
        firestore
          .collection("held_workorders")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch(err => {
            console.err("Error removing document: ", err);
          })
      );
  };
};

export const holdWorkorder = (workorder, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    //const profile = getState().firebase.profile;
    //const authorId = getState().firebase.auth.uid;

    //let newCount = profile.createdOrderCount + 1;

    firestore
      .collection("held_workorders")
      .doc(id)
      .set({
        ...workorder,
        heldAt: new Date()
      })
      .then(() => {
        dispatch({ type: "HOLD_WORKORDER", workorder });
      })
      .catch(err => {
        dispatch({ type: "HOLD_WORKORDER_ERROR", err });
      })
      .then(
        firestore
          .collection("workorders")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch(err => {
            console.err("Error removing document: ", err);
          })
      );
  };
};
