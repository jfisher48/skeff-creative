import React, { Component } from "react";
//import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createStripSet } from "../../../store/actions/shelfstripActions";
import styles from "./styleCreateStripSet.js";
import {
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  //Input,
  Card,
  CardHeader,
  CardContent,
  FormControlLabel,
  Grid,
  List,
  OutlinedInput,
  withWidth
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import AccountSelect from "../../AccountSelect";
import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded";
import Strip from "../Strip/Strip";
import AddIcon from "@material-ui/icons/Add";

class CreateStripSet extends Component {
  state = {
    account: "",
    orderType: "Shelf Strips",
    accountId: "",
    cost: 0,
    comments: "",
    isRush: false,
    assignedTo: "unassigned",
    assignedToName: "",
    assignedToEmail: "skeffgraphics@gmail.com",
    strips: [],
    dueDate: setDueDate(this.isRush),
    labelWidth: 0
  };

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
        var email = assignedTo.email;
        console.log(name);
        this.setState({ assignedToName: name, assignedToEmail: email });
        console.log(this.state.assignedToName);
      });
  };

  figureCost = strips => {
    var total = 0;
    for (var i = 0; i < strips.length; i++) {
      total += strips[i].cost;
    }
    return total;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
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
    console.log(this.state);
  };

  addStrip = e => {
    e.preventDefault();
    const newStrip = {
      editing: true,
      new: true,
      id: this.nextId(),
      brand: "",
      brandId: "",
      quantity: "",
      price: "",
      package: ""
    };

    console.log(newStrip);
    const strips = [...this.state.strips, newStrip];
    this.setState(
      {
        strips: strips
      },
      () => {
        console.log(this.state.strips);
        return (
          <Strip
            {...this.state.strips[newStrip.id]}
            //key={newStrip.id}
            //index={newStrip.id}
            onChange={this.update}
          >
            {newStrip.brand}
            {newStrip.quantity} ${newStrip.price}
            {newStrip.package}
          </Strip>
        );
      }
    );
    console.log(this.state.strips);
  };

  nextId = () => {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  };

  update = (
    newBrand,
    newBrandId,
    newQuantity,
    newCost,
    newPrice,
    newPackage,
    newId
  ) => {
    console.log(
      "updating strip",
      newId,
      newBrand,
      newBrandId,
      newQuantity,
      newCost,
      newPrice,
      newPackage
    );
    this.setState(prevState => ({
      strips: prevState.strips.map(
        strip =>
          strip.id !== newId
            ? strip
            : {
                ...strip,
                brand: newBrand,
                brandId: newBrandId,
                quantity: newQuantity,
                cost: newCost,
                price: newPrice,
                package: newPackage
              }
      )
    }));
  };

  removeStrip = id => {
    console.log("removing strip", id);
    this.setState(prevState => ({
      strips: prevState.strips.filter(strip => strip.id !== id)
    }));
  };

  eachStrip = (strip, i) => {
    return (
      <Strip
        {...this.state.strips[i]}
        key={strip.id}
        index={i}
        onChange={this.update}
        removeStrip={this.removeStrip}
        primary={
          <React.Fragment>
            {strip.brand}{" "}
            {this.props.width === "xs" ? "Qty: " + strip.quantity : ""}
          </React.Fragment>
        }
        secondary={
          <Typography>
            ${strip.price} {strip.package}
          </Typography>
        }
        stripCost={
          <Typography style={{ display: "inline-flex", marginRight: "10px" }}>
            {strip.cost}
          </Typography>
        }
      />
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.assignedTo !== prevState.assignedTo ||
      this.state.isRush !== prevState.isRush
    ) {
      console.log(this.state.account);
      this.setAssignedToName(this.state.assignedTo);
      this.setState({ dueDate: setDueDate(this.state.isRush) });
      console.log(this.state);
    }
    if (this.state.strips !== prevState.strips) {
      this.setState({ cost: this.figureCost(this.state.strips) });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createStripSet(this.state);
    this.props.history.push("/shelfstrips");
  };

  render() {
    const classes = this.props.classes;
    const { auth, users, accounts } = this.props;
    const { account, assignedTo, strips } = this.state;
    const isEnabled =
      account.length > 0 && assignedTo !== "unassigned" && strips.length > 0;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <Grid item xs={12}>
        <Card className={classes.formCard}>
          <CardHeader
            className={classes.formHeader}
            disableTypography
            title={
              <Typography color="textSecondary" className={classes.formTitle}>
                Order Shelf Strips
              </Typography>
            }
          />
          <CardContent className={classes.formContent}>
            <form className={classes.container} onSubmit={this.handleSubmit}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <FormControlLabel
                    className={classes.rushCheck}
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
                <Grid item xs={12} xl={6}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel shrink required htmlFor="account">
                      Account
                    </InputLabel>
                    <AccountSelect
                      accounts={accounts}
                      onSelectAccount={this.handleAccount}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} xl={6}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel required htmlFor="assignedTo">
                      Assign To
                    </InputLabel>
                    <Select
                      value={this.state.assignedTo}
                      onChange={this.handleNameSelect}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          className={classes.input}
                          labelWidth={this.state.labelWidth}
                          name="assignedTo"
                        />
                      }
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
                <Grid item xs={12}>
                  <TextField
                    name="comments"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                    label="Comments"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                {this.state.strips.length > 0 ? (
                  <Grid item xs={12}>
                    <List className={classes.stripsContainer}>
                      {this.state.strips.map(this.eachStrip)}
                    </List>
                  </Grid>
                ) : (
                  ""
                )}
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={this.addStrip}
                    className={classes.addButton}
                  >
                    <AddIcon className={classes.addIcon} />
                    New Strip
                  </Button>
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
                      this.props.history.push("/workorders");
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

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    accounts: state.firestore.ordered.accounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStripSet: stripset => dispatch(createStripSet(stripset))
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

const styledCreateStripSet = withStyles(styles)(CreateStripSet);

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
  }),
  withWidth()
)(styledCreateStripSet);