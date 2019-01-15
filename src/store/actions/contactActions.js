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
        cell: contact.cell ? contact.cell : null,
        department: contact.department,
        emailAddress: contact.emailAddress,
        ext: contact.ext ? contact.ext : null,
        firstName: contact.firstName,
        lastName: contact.lastName,
        position: contact.position,
        route: contact.route ? contact.route : null,
        seq: contact.seq,
        team: contact.team ? contact.team : null
      })
      .then(() => {
        dispatch({ type: "ADD_CONTACT", contact });
      })
      .catch(err => {
        dispatch({ type: "ADD_CONTACT_ERROR", err });
      });
  };
};
