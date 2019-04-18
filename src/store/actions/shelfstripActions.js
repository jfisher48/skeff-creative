export const createStripSet = stripset => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    let newCount = profile.createdOrderCount + 1;

    firestore
      .collection("stripsets")
      .doc(profile.routeNumber + ("0000000" + newCount).slice(-7))
      .set({
        ...stripset,
        stripsetNumber: profile.routeNumber + ("0000000" + newCount).slice(-7),
        requesterFirstName: profile.firstName,
        requesterLastName: profile.lastName,
        requesterId: authorId,
        requesterEmail: profile.email,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_STRIPSET", stripset });
      })
      .catch(err => {
        dispatch({ type: "CREATE_STRIPSET_ERROR", err });
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
          .doc(stripset.accountId)
          .set(
            {
              name: stripset.account,
              team: profile.team,
              addedBy: profile.firstName + " " + profile.lastName
            },
            { merge: true }
          )
      );
  };
};

export const createProject = stripset => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    //let newCount = profile.createdOrderCount + 1;

    firestore
      .collection("projects")
      .doc(stripset.projectId)
      .set(
        {
          ...stripset,
          //stripsetNumber: profile.routeNumber + ("0000000" + newCount).slice(-7),
          //requesterFirstName: profile.firstName,
          //requesterLastName: profile.lastName,
          requesterId: authorId
          //requesterEmail: profile.email,
          //createdAt: new Date()
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", stripset });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      })
      .then(
        firestore
          .collection("accounts")
          .doc(stripset.accountId)
          .set(
            {
              name: stripset.account,
              team: profile.team,
              addedBy: profile.firstName + " " + profile.lastName
            },
            { merge: true }
          )
      );
  };
};

//   export const completeWorkorder = (workorder, id) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//       const firestore = getFirestore();
//       const profile = getState().firebase.profile;
//       //const authorId = getState().firebase.auth.uid;

//       //let newCount = profile.createdOrderCount + 1;

//       firestore
//         .collection("completed_workorders")
//         .doc(id)
//         .set({
//           ...workorder,
//           completedAt: new Date(),
//           completedByFirst: profile.firstName,
//           completedByLast: profile.lastName
//         })
//         .then(() => {
//           dispatch({ type: "COMPLETE_WORKORDER", workorder });
//         })
//         .catch(err => {
//           dispatch({ type: "COMPLETE_WORKORDER_ERROR", err });
//         });
//     };
//   };

//   export const deleteWorkorder = (collection, id) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//       const firestore = getFirestore();

//       firestore
//         .collection(collection)
//         .doc(id)
//         .delete()
//         .then(() => {
//           dispatch({ type: "DELETE_WORKORDER", id });
//         })
//         .catch(err => {
//           dispatch({ type: "DELETE_WORKORDER_ERROR", err });
//         });
//     };
//   };

//   export const recreateWorkorder = (workorder, id) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//       const firestore = getFirestore();
//       const firebase = getFirebase();
//       const profile = getState().firebase.profile;

//       firestore
//         .collection("workorders")
//         .doc(id)
//         .set(
//           {
//             ...workorder,
//             restoredAt: new Date(),
//             restoredByFirst: profile.firstName,
//             restoredByLast: profile.lastName,
//             completedAt: firebase.firestore.FieldValue.delete()
//           },
//           { merge: true }
//         )
//         .then(() => {
//           dispatch({ type: "RECREATE_WORKORDER", workorder });
//         })
//         .catch(err => {
//           dispatch({ type: "RECREATE_WORKORDER_ERROR", err });
//         })
//         .then(
//           firestore
//             .collection("completed_workorders")
//             .doc(id)
//             .delete()
//             .then(() => {
//               console.log("Document successfully deleted!");
//             })
//             .catch(err => {
//               console.err("Error removing document: ", err);
//             })
//         );
//     };
//   };

//   export const restoreWorkorder = (workorder, id) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//       const firestore = getFirestore();
//       const firebase = getFirebase();
//       const profile = getState().firebase.profile;

//       firestore
//         .collection("workorders")
//         .doc(id)
//         .set(
//           {
//             ...workorder,
//             restoredAt: new Date(),
//             restoredByFirst: profile.firstName,
//             restoredByLast: profile.lastName,
//             heldAt: firebase.firestore.FieldValue.delete()
//           },
//           { merge: true }
//         )
//         .then(() => {
//           dispatch({ type: "RESTORE_WORKORDER", workorder });
//         })
//         .catch(err => {
//           dispatch({ type: "RESTORE_WORKORDER_ERROR", err });
//         })
//         .then(
//           firestore
//             .collection("held_workorders")
//             .doc(id)
//             .delete()
//             .then(() => {
//               console.log("Document successfully deleted!");
//             })
//             .catch(err => {
//               console.err("Error removing document: ", err);
//             })
//         );
//     };
//   };

//   export const holdWorkorder = (workorder, id) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//       const firestore = getFirestore();
//       const profile = getState().firebase.profile;

//       firestore
//         .collection("held_workorders")
//         .doc(id)
//         .set({
//           ...workorder,
//           heldByFirst: profile.firstName,
//           heldByLast: profile.lastName,
//           heldAt: new Date()
//         })
//         .then(() => {
//           dispatch({ type: "HOLD_WORKORDER", workorder });
//         })
//         .catch(err => {
//           dispatch({ type: "HOLD_WORKORDER_ERROR", err });
//         })
//         .then(
//           firestore
//             .collection("workorders")
//             .doc(id)
//             .delete()
//             .then(() => {
//               console.log("Document successfully deleted!");
//             })
//             .catch(err => {
//               console.err("Error removing document: ", err);
//             })
//         );
//     };
//   };
