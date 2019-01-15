import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import { IconButton, List } from "@material-ui/core";
import styles from "./styleContactList";
import AddIcon from "@material-ui/icons/Add";
import { getFirestore } from "redux-firestore";
import Contact from "../Contact/Contact";

// const handleAdd = (contact, user) => {
//   const firestore = getFirestore();

//   firestore
//     .collection("users")
//     .doc(user)
//     .collection("myContacts")
//     .doc(contact.id)
//     .set({
//       ...contact,
//       added: true
//     });
// };

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
                // added={
                //   myIds.includes(contact.id) ? (
                //     ""
                //   ) : (
                //     <IconButton
                //       size="small"
                //       color="secondary"
                //       onClick={() => {
                //         handleAdd(contact, auth.uid);
                //       }}
                //     >
                //       <AddIcon className={classes.addIcon} />
                //     </IconButton>
                //   )
                // }
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

export default compose(
  connect(mapStateToProps),
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
