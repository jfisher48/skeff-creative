import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import { deleteMyContact } from "../../../store/actions/contactActions";
import { IconButton, List } from "@material-ui/core";
import styles from "./styleContactList";
import DeleteIcon from "@material-ui/icons/RemoveCircle";
import Contact from "../Contact/Contact";

class MyContactList extends Component {
  render() {
    const classes = this.props.classes;
    const { myContacts, auth } = this.props;

    if (this.props.filteredBy && this.props.filteredBy.length > 0) {
      var filteredContacts = myContacts.filter(contact => {
        return (
          contact.department === this.props.filteredBy ||
          contact.team === this.props.filteredBy
        );
      });
    } else {
      filteredContacts = myContacts;
    }

    var sortedByLast = filteredContacts.sort(compareValues("lastName", "asc"));
    var sortedBySeq = sortedByLast.sort(compareValues("seq", "asc"));

    return (
      <List className={classes.tableBody}>
        {sortedBySeq &&
          sortedBySeq.map(contact => {
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
                  <IconButton
                    className={classes.iconButton}
                    size="small"
                    color="secondary"
                    onClick={() => {
                      this.props.deleteMyContact(contact, auth.uid);
                    }}
                  >
                    <DeleteIcon className={classes.deleteIcon} />
                  </IconButton>
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

const styledMyContactList = withStyles(styles)(MyContactList);

const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth,
    myContacts: state.firestore.ordered.myContacts
      ? state.firestore.ordered.myContacts
      : []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMyContact: (contact, user) => dispatch(deleteMyContact(contact, user))
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
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "myContacts" }],
        storeAs: "myContacts"
      }
    ];
  })
)(styledMyContactList);
