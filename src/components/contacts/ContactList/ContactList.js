import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TableBody, TableRow, TableCell, IconButton } from "@material-ui/core";
import styles from "./styleContactList";
import AddIcon from "@material-ui/icons/Add";
import { getFirestore, getState } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

const handleAdd = (contact, user) => {
  const firestore = getFirestore();
  const firebase = getFirebase();

  firestore
    .collection("users")
    .doc(user)
    .collection("myContacts")
    .doc(contact.id)
    .set({
      ...contact,
      added: true
    });
};

const ContactList = ({ contacts, auth }) => {
  return (
    <TableBody>
      {contacts &&
        contacts.sort(compareValues("lastName", "asc")).map(contact => {
          return (
            <TableRow key={contact.id}>
              <TableCell>
                {contact.firstName} {contact.lastName}
              </TableCell>
              <TableCell>{contact.position}</TableCell>
              <TableCell>{contact.route ? contact.route : "N/A"}</TableCell>
              <TableCell>
                <a href={"mailto:" + contact.emailAddress}>
                  {contact.emailAddress}
                </a>
              </TableCell>
              <TableCell>{contact.ext ? contact.ext : "N/A"}</TableCell>
              <TableCell>{contact.cell}</TableCell>
              <TableCell>
                {!contact.added ? (
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => {
                      handleAdd(contact, auth);
                    }}
                  >
                    <AddIcon style={{ fontSize: "16px" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    size="small"
                    color="secondary"
                    // onClick={() => {
                    //   handleAdd(contact, auth);
                    // }}
                  >
                    {/* <AddIcon style={{fontSize: "16px"}} /> */}
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );

  function compareValues(key, order = "asc") {
    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }
};

const styledComponent = withStyles(styles)(ContactList);

export default styledComponent;
