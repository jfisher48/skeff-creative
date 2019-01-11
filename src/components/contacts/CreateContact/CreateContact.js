import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleCreateContact";
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  CardContent,
  TextField,
  Button
} from "@material-ui/core";
import { createContact } from "../../../store/actions/contactActions";
import { compose } from "recompose";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

class CreateContact extends Component {
  state = {
    firstName: "",
    lastName: "",
    position: "",
    department: "",
    cell: "",
    emailAddress: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact(this.state);
    this.props.history.push("/admin");
  };

  render() {
    const classes = this.props.classes;
    const {
      firstName,
      lastName,
      position,
      department,
      cell,
      emailAddress
    } = this.state;
    const isEnabled =
      firstName.length > 0 &&
      lastName.length > 0 &&
      position.length > 0 &&
      department.length > 0 &&
      cell.length > 0 &&
      emailAddress.length > 0;
    return (
      <Grid item xs={12}>
        <Card className={classes.formCard}>
          <CardHeader
            className={classes.formHeader}
            disableTypography
            title={
              <Typography color="textSecondary" className={classes.formTitle}>
                Create Contact
              </Typography>
            }
          />
          <CardContent className={classes.formContent}>
            <form className={classes.container} onSubmit={this.handleSubmit}>
              <Grid container spacing={16}>
                <Grid item xs="12" md="6">
                  <TextField
                    required
                    value={this.state.firstName}
                    variant="outlined"
                    name="firstName"
                    label="First Name"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs="12" md="6">
                  <TextField
                    required
                    value={this.state.lastName}
                    variant="outlined"
                    name="lastName"
                    label="Last Name"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs="12" md="6">
                  <TextField
                    required
                    value={this.state.position}
                    variant="outlined"
                    name="position"
                    label="Position"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs="12" md="6">
                  <TextField
                    required
                    value={this.state.department}
                    variant="outlined"
                    name="department"
                    label="Department"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs="12" md="4">
                  <TextField
                    value={this.state.route}
                    variant="outlined"
                    name="route"
                    label="Route"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs="12" md="4">
                  <TextField
                    value={this.state.team}
                    variant="outlined"
                    name="team"
                    label="Team"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs="12" md="4">
                  <TextField
                    value={this.state.ext}
                    variant="outlined"
                    name="ext"
                    label="Extension"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs="12" md="4">
                  <TextField
                    required
                    value={this.state.cell}
                    variant="outlined"
                    name="cell"
                    label="Cell Phone"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs="12" md="8">
                  <TextField
                    required
                    value={this.state.emailAddress}
                    variant="outlined"
                    name="emailAddress"
                    label="Email Address"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disabled={!isEnabled}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.createButton}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.createButton}
                    onClick={() => {
                      this.props.history.push("/admin");
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

const styledCreateContact = withStyles(styles)(CreateContact);

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    accounts: state.firestore.ordered.accounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createContact: contact => dispatch(createContact(contact))
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
      { collection: "accounts", where: [["userId", "==", props.auth.uid]] },
      { collection: "users", where: ["role", "==", "graphics"] }
    ];
  })
)(styledCreateContact);
