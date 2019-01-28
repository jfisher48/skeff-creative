import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import { addContact } from "../../../store/actions/contactActions";
import { IconButton, List, withWidth, Button } from "@material-ui/core";
import styles from "./styleContactList";
import CheckIcon from "@material-ui/icons/CheckCircle";
import AddIcon from "@material-ui/icons/AddCircle";
import Contact from "../Contact/Contact";

class ContactList extends Component {
  render() {
    const classes = this.props.classes;
    const { companyContacts, myContacts, auth, width } = this.props;
    var myIds = [];

    myContacts.map(id => {
      return myIds.push(id.id);
    });

    if (this.props.filteredBy && this.props.filteredBy.length > 0) {
      var filteredContacts = companyContacts.filter(contact => {
        return (
          contact.department === this.props.filteredBy ||
          contact.team === this.props.filteredBy
        );
      });
    } else {
      filteredContacts = companyContacts;
    }

    var sortedByLast = filteredContacts.sort(compareValues("lastName", "asc"));
    var sortedBySeq = sortedByLast.sort(compareValues("seq", "asc"));
    var sortedByDept = sortedBySeq.sort(compareValues("deptSeq", "asc"));

    return (
      <List className={classes.tableBody}>
        {sortedByDept &&
          sortedByDept.map(contact => {
            return (
              <Contact
                key={contact.id}
                firstName={contact.firstName}
                lastName={contact.lastName}
                position={contact.position}
                route={contact.route}
                emailAddress={contact.emailAddress}
                ext={contact.ext}
                cell={contact.cell}
                added={
                  myIds.includes(contact.id) ? (
                    <div className={classes.checkWrapper}>
                      <CheckIcon className={classes.checkIcon} />
                    </div>
                  ) : width === "xs" ? (
                    <Button
                      className={classes.addButton}
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        this.props.addContact(contact, auth.uid);
                      }}
                    >
                      Add To My Contacts
                    </Button>
                  ) : (
                    <IconButton
                      className={classes.iconButton}
                      size="small"
                      color="secondary"
                      onClick={() => {
                        this.props.addContact(contact, auth.uid);
                      }}
                    >
                      <AddIcon className={classes.addIcon} />
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

const styledContactList = withStyles(styles)(ContactList);

const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth,
    companyContacts: state.firestore.ordered.contacts_company
      ? state.firestore.ordered.contacts_company
      : [],
    myContacts: state.firestore.ordered.myContacts
      ? state.firestore.ordered.myContacts
      : []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: (contact, user) => dispatch(addContact(contact, user))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];

    return [
      {
        collection: "contacts_company"
      },
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "myContacts" }],
        storeAs: "myContacts"
      }
    ];
  }),
  withWidth()
)(styledContactList);
