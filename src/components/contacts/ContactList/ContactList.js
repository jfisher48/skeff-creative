import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Hidden,
  IconButton,
  withWidth,
  List,
  ListItem,
  ListItemText,
  Dialog
} from "@material-ui/core";
import styles from "./styleContactList";
import AddIcon from "@material-ui/icons/Add";
import { getFirestore, getState } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import Contact from "../Contact/Contact";

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

class ContactList extends Component {
  render() {
    const classes = this.props.classes;
    const { contacts, auth } = this.props;

    return (
      <List className={classes.tableBody}>
        {contacts &&
          contacts.sort(compareValues("lastName", "asc")).map(contact => {
            return (
              <Contact
                id={contact.id}
                firstName={contact.firstName}
                lastName={contact.lastName}
                position={contact.position}
                route={contact.route}
                emailAddress={contact.emailAddress}
                ext={contact.ext}
                cell={contact.cell}
                added={
                  !contact.added ? (
                    <IconButton
                      size="small"
                      color="secondary"
                      onClick={() => {
                        handleAdd(contact, auth);
                      }}
                    >
                      <AddIcon className={classes.addIcon} />
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
                  )
                }
              />
            );
          })}
      </List>
    );
  }
}

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

const styledComponent = withStyles(styles)(ContactList);

export default withWidth()(styledComponent);
