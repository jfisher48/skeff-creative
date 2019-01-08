import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Hidden,
  IconButton,
  withWidth,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
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

class ContactList extends Component {
  render() {
    const classes = this.props.classes;
    const { width, contacts, auth } = this.props;

    return (
      <List className={classes.tableBody}>
        {contacts &&
          contacts.sort(compareValues("lastName", "asc")).map(contact => {
            return (
              <ListItem
                alignItems="flex-start"
                button={width !== "xs" ? false : true}
                key={contact.id}
                className={classes.tableRow}
              >
                {width === "xs" ? (
                  <ListItemText
                    primary={contact.firstName + " " + contact.lastName}
                    secondary={contact.position}
                  />
                ) : (
                  ""
                )}
                <Hidden xsDown>
                  <div className={classes.nameCell}>
                    {contact.firstName} {contact.lastName}
                  </div>
                </Hidden>
                <Hidden xsDown>
                  <div className={classes.positionCell}>{contact.position}</div>
                </Hidden>
                <Hidden xsDown>
                  <div className={classes.tableCell}>
                    {contact.route ? contact.route : "N/A"}
                  </div>
                </Hidden>
                <Hidden xsDown>
                  <div className={classes.tableCell}>
                    <a href={"mailto:" + contact.emailAddress}>
                      {contact.emailAddress}
                    </a>
                  </div>
                </Hidden>
                <Hidden xsDown>
                  <div className={classes.tableCell}>
                    {contact.ext ? contact.ext : "N/A"}
                  </div>
                </Hidden>
                <Hidden xsDown>
                  <div className={classes.tableCell}>{contact.cell}</div>
                </Hidden>
                <Hidden xsDown>
                  <div className={classes.actionCell}>
                    {!contact.added ? (
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
                    )}
                  </div>
                </Hidden>
              </ListItem>
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
