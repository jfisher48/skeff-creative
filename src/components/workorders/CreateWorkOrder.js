import React, { Component } from "react";
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
  //Input,
  Card,
  CardHeader,
  CardContent,
  FormControlLabel,
  Grid,
  List,
  OutlinedInput
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import AccountSelect from "../AccountSelect";
import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded";
import Item from "./Item/Item";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  formCard: {
    display: "flex",
    position: "relative",
    overflowY: "auto",
    flexDirection: "column"
  },
  formHeader: {
    flex: "0 0 auto",
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
  // formContent: {
  //   padding: "24px 26px",
  //   overflowY: "auto",
  //   [theme.breakpoints.down("sm")]: {
  //     width: "65vw",
  //     maxHeight: "55vh"
  //   },
  //   [theme.breakpoints.up("sm")]: {
  //     width: "75vw",
  //     maxHeight: "65vh"
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     width: "50vw",
  //     maxHeight: "75vh"
  //   }
  // },
  addIcon: {
    fontSize: 15,
    marginRight: "5px",
    fontWeight: "bolder",
    //padding: "12px 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      margin: "0",
      fontWeight: "500"
    }
  },
  itemsContainer: {
    width: "100%",
    overflowX: "auto",
    fontSize: "16px"
  },
  table: {
    minWidth: 700,
    fontSize: "16px"
  },
  container: {
    margin: 10
    //padding: "24px 30px",
    //display: "flex",
    //flexDirection: "row",
    //justifyContent: "space-between",
    //flexWrap: "wrap"
  },
  headingText: {
    marginBottom: "20px"
  },
  rushCheck: {
    float: "right",
    marginRight: "0"
  },
  textField: {
    //marginLeft: theme.spacing.unit,
    //marginRight: theme.spacing.unit,
    width: "100%",
    justifyContent: "stretch"
  },
  formSelect: {
    //marginLeft: theme.spacing.unit,
    //marginRight: theme.spacing.unit,
    width: "100%"
    //flex: "1 1 auto"
  },
  createButton: {
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "10px"
    },
    [theme.breakpoints.up("md")]: {
      float: "right",
      marginLeft: "10px"
    }
  },
  dense: {
    marginTop: 19
  }
});

class CreateWorkOrder extends Component {
  state = {
    account: "",
    orderType: "Standard POS",
    accountId: "",
    cost: 0,
    comments: "",
    isRush: false,
    assignedTo: "unassigned",
    assignedToName: "",
    assignedToEmail: "skeffgraphics@gmail.com",
    items: [],
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

  figureCost = items => {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
      total += items[i].cost;
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

  addItem = e => {
    e.preventDefault();
    const newItem = {
      editing: true,
      new: true,
      id: this.nextId(),
      brand: "",
      signTheme: "",
      signType: "",
      signTypeName: "",
      signSize: "",
      quantity: "",
      price: "",
      package: "",
      pkgSize: "",
      pkgType: "",
      sizeOptions: []
    };

    console.log(newItem);
    const items = [...this.state.items, newItem];
    this.setState(
      {
        items: items
      },
      () => {
        console.log(this.state.items);
        return (
          <Item
            {...this.state.items[newItem.id]}
            //key={newItem.id}
            //index={newItem.id}
            onChange={this.update}
          >
            {newItem.brand} {newItem.signTheme} {newItem.signTypeName}
            {newItem.signDimensions} {newItem.quantity} ${newItem.price}
            {newItem.package} {newItem.pkgSize} {newItem.pkgType}
          </Item>
        );
      }
    );
    console.log(this.state.items);
  };

  nextId = () => {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  };

  update = (
    newBrand,
    newSignTheme,
    newSignType,
    newSignTypeName,
    newSignSize,
    newSignDimensions,
    newQuantity,
    newCost,
    newPrice,
    newPackage,
    newPkgSize,
    newPkgType,
    newId
  ) => {
    console.log(
      "updating item",
      newId,
      newBrand,
      newSignTheme,
      newSignType,
      newSignTypeName,
      newSignSize,
      newSignDimensions,
      newQuantity,
      newCost,
      newPrice,
      newPackage,
      newPkgSize,
      newPkgType
    );
    this.setState(prevState => ({
      items: prevState.items.map(
        item =>
          item.id !== newId
            ? item
            : {
                ...item,
                brand: newBrand,
                signTheme: newSignTheme,
                signType: newSignType,
                signTypeName: newSignTypeName,
                signSize: newSignSize,
                signDimensions: newSignDimensions,
                quantity: newQuantity,
                cost: newCost,
                price: newPrice,
                package: newPackage,
                pkgSize: newPkgSize,
                pkgType: newPkgType
              }
      )
    }));
  };

  removeItem = id => {
    console.log("removing item", id);
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
  };

  eachItem = (item, i) => {
    return (
      <Item
        {...this.state.items[i]}
        key={item.id}
        index={i}
        onChange={this.update}
        removeItem={this.removeItem}
        primary={
          <React.Fragment>
            {item.brand} {item.signTheme} {item.signTypeName}{" "}
            {item.signDimensions} Qty: {item.quantity}
          </React.Fragment>
        }
        secondary={
          <Typography>
            ${item.price} {item.package} {item.pkgSize} {item.pkgType}
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
    if (this.state.items !== prevState.items) {
      this.setState({ cost: this.figureCost(this.state.items) });
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
    const { account, assignedTo, items } = this.state;
    const isEnabled =
      account.length > 0 && assignedTo !== "unassigned" && items.length > 0;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <Grid item xs={12}>
        <Card className={classes.formCard}>
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
                  {this.state.items.length > 0 ? (
                    <List className={classes.itemsContainer}>
                      {this.state.items.map(this.eachItem)}
                    </List>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={this.addItem}
                  >
                    <AddIcon className={classes.addIcon} />
                    New Item
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="comments"
                    variant="outlined"
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

const styledCreateWorkOrder = withStyles(styles)(CreateWorkOrder);

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
)(styledCreateWorkOrder);
