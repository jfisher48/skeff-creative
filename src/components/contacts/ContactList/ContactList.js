import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import styles from "./styleContactList";

const ContactList = ({ contacts }) => {
  return (
    <Grid container spacing={16}>
      {contacts &&
        contacts.sort(compareValues("lastName", "asc")).map(contact => {
          return (
            <Typography>
              {contact.firstName} {contact.lastName}
            </Typography>
          );
        })}
    </Grid>
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
