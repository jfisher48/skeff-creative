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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Button
} from "@material-ui/core";
import { createContact } from "../../../store/actions/contactActions";
import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded";
import { getFirestore } from "redux-firestore";
import { compose } from "recompose";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class CreateContact extends Component {
  state = {
    firstName: "",
    lastName: "",
    position: "",
    department: "",
    route: "",
    team: "",
    ext: "",
    cell: "",
    emailAddress: "",
    seq: 5
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  setDeptSeq = checkDepartment => {
    const firestore = getFirestore();

    firestore
      .collection("departments")
      .doc(checkDepartment.toLowerCase())
      .get()
      .then(results => {
        var dept = results.data();
        var seq = dept.seq;
        this.setState({
          deptSeq: seq
        });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.department !== prevState.department) {
      this.setDeptSeq(this.state.department);
    }
  }

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

    const { departments } = this.props;
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
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel
                      FormLabelClasses={classes.mylabel}
                      required
                      htmlFor="department"
                    >
                      Department
                    </InputLabel>
                    <Select
                      value={this.state.department}
                      onChange={this.handleChange}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          labelWidth={0}
                          className={classes.outlinedInput}
                          name="department"
                        />
                      }
                    >
                      {departments &&
                        departments.map(department => (
                          <MenuItem
                            key={department.seq}
                            value={department.name}
                          >
                            {department.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    value={this.state.seq}
                    variant="outlined"
                    name="seq"
                    label="Priority"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
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
                <Grid item xs={12} md={3}>
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
                <Grid item xs={12} md={3}>
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
                <Grid item xs={12} md={4}>
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
                <Grid item xs={12} md={8}>
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
    accounts: state.firestore.ordered.accounts,
    departments: state.firestore.ordered.departments
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
      { collection: "users", where: ["role", "==", "graphics"] },
      { collection: "departments" }
    ];
  })
)(styledCreateContact);
