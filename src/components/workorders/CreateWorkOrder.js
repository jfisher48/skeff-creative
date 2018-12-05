import React, { Component } from "react";
//import PropTypes from 'prop-types';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createWorkorder } from "../../store/actions/workorderActions";
import {
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Card,
  CardHeader,
  CardContent,
  FormControlLabel,
  Grid
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import AccountSelect from "../AccountSelect";

const styles = theme => ({
  formHeader: {
    padding: "16px 26px",
    lineHeight: "33.06px",
    backgroundColor: "#e7e7e7"
  },
  formTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    lineHeight: "33.06px",
    color: "rgba(0,0,0,0.65)"
  },
  formContent: {
    padding: "24px 30px",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "65vw",
      maxHeight: "55vh"
    },
    [theme.breakpoints.up("sm")]: {
      width: "75vw",
      maxHeight: "65vh"
    },
    [theme.breakpoints.up("lg")]: {
      width: "50vw",
      maxHeight: "75vh"
    }
  },
  container: {
    //display: "flex",
    //flexDirection: "row",
    //justifyContent: "space-between",
    //flexWrap: "wrap"
  },
  headingText: {
    marginBottom: "20px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    justifyContent: "stretch"
  },
  assignSelect: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
    //flex: "1 1 auto"
  },

  dense: {
    marginTop: 19
  }
});

class CreateWorkOrder extends Component {
  state = {
    account: "",
    accountId: "",
    comments: "",
    isRush: false,
    assignedTo: "unassigned",
    assignedToName: "Unassigned",
    //items: [],
    dueDate: setDueDate(this.isRush)
  };

  // constructor(props) {
  //   super(props);
  //   this.onChangeAccount = this.onChangeAccount.bind(this);
  // }

  setAssignedToName = checkId => {
    const firestore = getFirestore();

    firestore
      .collection("users")
      .doc(checkId)
      .get()
      .then(results => {
        var assignedTo = results.data();
        console.log(assignedTo);
        var name = assignedTo.firstName + " " + assignedTo.lastName;
        console.log(name);
        this.setState({ assignedToName: name });
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRushToggle = () => {
    this.setState({ isRush: !this.state.isRush });
  };

  handleAccount = (accountId, account) => {
    if (accountId != null)
      this.setState({
        accountId: accountId,
        account: account
      });
  };

  handleNameSelect = e => {
    this.setState({ assignedTo: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.assignedTo !== prevState.assignedTo ||
      this.state.isRush !== prevState.isRush
    ) {
      console.log(this.state.account);
      this.setAssignedToName(this.state.assignedTo);
      this.setState({ dueDate: setDueDate(this.state.isRush) });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createWorkorder(this.state);
    this.props.history.push("/workorders");
  };

  render() {
    const classes = this.props.classes;
    const { auth, users, accounts } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <Card>
        <CardHeader
          className={classes.formHeader}
          disableTypography
          title={
            <Typography color="textSecondary" className={classes.formTitle}>
              Create Work Order
            </Typography>
          }
        />
        <CardContent className={classes.formContent}>
          <form className={classes.container} onSubmit={this.handleSubmit}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.isRush}
                      onChange={this.handleRushToggle}
                      value="isRush"
                    />
                  }
                  label="Rush Order"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <AccountSelect
                  accounts={accounts}
                  onSelectAccount={this.handleAccount}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl className={classes.assignSelect}>
                  <InputLabel htmlFor="assignedTo">Assign To</InputLabel>
                  <Select
                    value={this.state.assignedTo}
                    onChange={this.handleNameSelect}
                    input={<Input name="assignedTo" />}
                  >
                    {users &&
                      users.map(user => (
                        <MenuItem key={user.id} value={user.id}>
                          {user.firstName} {user.lastName}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  name="account"
                  type="text"
                  label="Account"
                  className={classNames(classes.textField, classes.dense)}
                  margin="normal"
                  fullWidth
                  onChange={this.handleChange}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  name="comments"
                  multiline
                  rowsMax="4"
                  label="Comments"
                  className={classNames(classes.textField, classes.dense)}
                  fullWidth
                  margin="normal"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Create Order
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    accounts: state.firestore.ordered.accounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWorkorder: workorder => dispatch(createWorkorder(workorder))
  };
};

function setDueDate(check) {
  var dueDate;
  var d = new Date();
  var n = d.getDay();
  if ((n === 1 || n === 2 || n === 3) && check === false) {
    dueDate = new Date(Date.now() + 172800000);
  } else if ((n === 4 || n === 5 || n === 6) && check === false) {
    dueDate = new Date(Date.now() + 345600000);
  } else if (n === 0 && check === false) {
    dueDate = new Date(Date.now() + 259200000);
  } else if (n === 5 && check === true) {
    dueDate = new Date(Date.now() + 259200000);
  } else if (n === 6 && check === true) {
    dueDate = new Date(Date.now() + 172800000);
  } else {
    dueDate = new Date(Date.now() + 86400000);
  }

  return dueDate;
}

const styledComponent = withStyles(styles)(CreateWorkOrder);

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
)(styledComponent);
