export const createContact = contact => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("contacts_company")
      .add({
        ...contact
      })
      .then(() => {
        dispatch({ type: "CREATE_CONTACT", contact });
      })
      .catch(err => {
        dispatch({ type: "CREATE_CONTACT_ERROR", err });
      });
  };
};

export const addContact = (contact, user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("users")
      .doc(user)
      .collection("myContacts")
      .doc(contact.id)
      .set({
        cell: contact.cell ? contact.cell : "",
        department: contact.department,
        emailAddress: contact.emailAddress,
        ext: contact.ext ? contact.ext : "",
        firstName: contact.firstName,
        lastName: contact.lastName,
        position: contact.position,
        route: contact.route ? contact.route : "",
        seq: contact.seq,
        team: contact.team ? contact.team : ""
      })
      .then(() => {
        dispatch({ type: "ADD_CONTACT", contact });
      })
      .catch(err => {
        dispatch({ type: "ADD_CONTACT_ERROR", err });
      });
  };
};

export const deleteMyContact = (contact, user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("users")
      .doc(user)
      .collection("myContacts")
      .doc(contact.id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_MYCONTACT", contact });
      })
      .catch(err => {
        dispatch({ type: "DELETE_MYCONTACT_ERROR", err });
      });
  };
};
