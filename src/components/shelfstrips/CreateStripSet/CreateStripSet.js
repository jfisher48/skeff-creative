import React, { Component } from "react";
//import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { compose } from "recompose";
import { connect } from "react-redux";
import {
  createStripSet,
  createProject,
  createDraft
} from "../../../store/actions/shelfstripActions";
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
    format: "standard",
    accountId: "",
    cost: 0,
    lineCount: 0,
    stripCount: 0,
    comments: "",
    isRush: false,
    description: "",
    assignedTo: "unassigned",
    assignedToName: "",
    assignedToEmail: "skeffgraphics@gmail.com",
    strips: [],
    //dueDate: setDueDate(this.isRush),
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

  figureStripCount = strips => {
    var stripCount = 0;
    for (var i = 0; i < strips.length; i++) {
      stripCount += strips[i].quantity;
    }
    return stripCount;
  };

  figureLineCount = strips => {
    var stripCount = 0;
    for (var i = 0; i < strips.length; i++) {
      stripCount += 1;
    }
    return stripCount;
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
      //editing: true,
      //new: true,
      id: this.nextId(),
      brand: "",
      brandId: "",
      quantity: 1,
      price: "",
      singlePrice: "",
      isYellow: false,
      extText: "",
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
            {newStrip.quantity} ${newStrip.price} {newStrip.singlePrice}
            {newStrip.package} {newStrip.extText} {newStrip.isYellow}
          </Strip>
        );
      }
    );
    console.log(this.state.strips);
  };

  copyStrip = prevId => {
    const prevStrip = this.state.strips.filter(strip => {
      return strip.id === prevId;
    });
    const newStrip = {
      //editing: true,
      //new: true,
      id: this.nextId(),
      brand: prevStrip[0].brand,
      brandId: prevStrip[0].brandId,
      quantity: prevStrip[0].quantity,
      price: prevStrip[0].price,
      singlePrice: prevStrip[0].singlePrice,
      isYellow: prevStrip[0].isYellow,
      extText: prevStrip[0].extText,
      package: prevStrip[0].package
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
            {newStrip.quantity} ${newStrip.price} {newStrip.singlePrice}
            {newStrip.package} {newStrip.extText} {newStrip.isYellow}
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
    newSinglePrice,
    newIsYellow,
    newExtText,
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
      newSinglePrice,
      newIsYellow,
      newExtText,
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
                singlePrice: newSinglePrice,
                isYellow: newIsYellow,
                extText: newExtText,
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
        copyStrip={this.copyStrip}
        primary={
          <React.Fragment>
            {strip.brand}{" "}
            {this.props.width === "xs" ? "Qty: " + strip.quantity : ""}
          </React.Fragment>
        }
        secondary={
          <Typography>
            {strip.extText && strip.extText.includes("for")
              ? strip.extText +
                " $" +
                strip.price +
                " " +
                strip.package +
                " ($" +
                strip.singlePrice +
                " singles)"
              : "$" + strip.price + " " + strip.package + " " + strip.extText}
          </Typography>
        }
        yellowStatus={
          <Typography style={{ display: "inline-flex", marginRight: "10px" }}>
            {strip.isYellow ? "Yellow (Promo Price)" : ""}
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
      //this.setState({ dueDate: setDueDate(this.state.isRush) });
      console.log(this.state);
    }
    if (this.state.strips !== prevState.strips) {
      this.setState({
        stripCount: this.figureStripCount(this.state.strips),
        lineCount: this.figureLineCount(this.state.strips)
      });
      if (this.state.lineCount > 0 && this.state.lineCount % 10 === 0) {
        this.saveDraft();
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createStripSet(this.state);
    //this.saveProject()
    this.props.history.push("/shelfstrips");
  };

  saveDraft = () => {
    const firestore = getFirestore();

    let newCount = this.props.profile.createdProjectCount + 1;
    if (this.state.projectId) {
      this.props.createProject(this.state);
      console.log("updated project " + this.state.projectId);
    } else {
      this.setState(
        { projectId: this.props.profile.routeNumber + "-" + newCount },
        () => {
          console.log("created project " + this.state.projectId);
          this.props.createDraft(this.state);
          firestore
            .collection("users")
            .doc(this.props.auth.uid)
            .update({
              createdProjectCount: newCount
            });
        }
      );
    }
  };

  saveProject = () => {
    const firestore = getFirestore();

    let newCount = this.props.profile.createdProjectCount + 1;
    if (this.state.projectId) {
      this.props.createProject(this.state);
      console.log("updated project " + this.state.projectId);
    } else {
      this.setState(
        { projectId: this.props.profile.routeNumber + "-" + newCount },
        () => {
          console.log("created project " + this.state.projectId);
          this.props.createProject(this.state);
          firestore
            .collection("users")
            .doc(this.props.auth.uid)
            .update({
              createdProjectCount: newCount
            });
        }
      );
    }
  };

  render() {
    const classes = this.props.classes;
    const { auth, users, accounts, profile, formats } = this.props;
    const { account, assignedTo, strips, description, format } = this.state;

    console.log(formats);

    if (profile.role === "sales") {
      var myAccounts =
        accounts &&
        accounts.filter(account => {
          return (
            (account.routeNumber &&
              account.routeNumber === profile.routeNumber) ||
            (!account.routeNumber &&
              (account.team === profile.team || account.team === "all"))
          );
        });
    } else {
      myAccounts = accounts;
    }

    const isEnabled =
      account.length > 0 &&
      description.length > 0 &&
      assignedTo !== "unassigned" &&
      strips.length > 0;
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
                <Grid item xs={12} sm={6}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel shrink required htmlFor="account">
                      Account
                    </InputLabel>
                    <AccountSelect
                      accounts={myAccounts}
                      onSelectAccount={this.handleAccount}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="description"
                    variant="outlined"
                    label="Description"
                    required
                    className={classes.textField}
                    fullWidth
                    //margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel required htmlFor="format">
                      Format
                    </InputLabel>
                    <Select
                      value={this.state.format}
                      onChange={this.handleChange}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          className={classes.input}
                          labelWidth={this.state.labelWidth}
                          name="format"
                        />
                      }
                    >
                      {formats &&
                        formats.map(format => (
                          <MenuItem key={format.id} value={format.id}>
                            {format.name}
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
                  {this.state.accountId && this.state.accountId.length > 0 ? (
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={this.addStrip}
                      className={classes.addButton}
                    >
                      <AddIcon className={classes.addIcon} />
                      New Strip
                    </Button>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disabled={!isEnabled}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.createButton}
                  >
                    Submit Order
                  </Button>
                  <Button
                    disabled={!isEnabled}
                    variant="contained"
                    className={classes.createButton}
                    onClick={() => {
                      this.saveProject();
                    }}
                  >
                    Save Project
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.createButton}
                    onClick={() => {
                      this.props.history.push("/shelfstrips");
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
    accounts: state.firestore.ordered.accounts,
    formats: state.firestore.ordered.strip_formats,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStripSet: stripset => dispatch(createStripSet(stripset)),
    createProject: stripset => dispatch(createProject(stripset)),
    createDraft: stripset => dispatch(createDraft(stripset))
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
      { collection: "accounts" },
      { collection: "users", where: ["role", "==", "graphics"] },
      { collection: "strip_formats" }
    ];
  }),
  withWidth()
)(styledCreateStripSet);
