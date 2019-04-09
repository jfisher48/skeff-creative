import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
  withWidth
} from "@material-ui/core";
import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded";
import { compose } from "recompose";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styles from "./styleStrip.js";
import { getFirestore } from "redux-firestore";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import BrandSelect from "../../BrandSelect/BrandSelect.js";

class Strip extends Component {
  state = {
    editing: this.props.editing,
    new: this.props.new,
    id: this.props.id,
    brand: this.props.brand,
    brandId: this.props.brandId,
    cost: 0,
    package: this.props.package,
    quantity: 1,
    price: this.props.price,
    labelWidth: 0,
    errMessage: ""
  };

  edit = e => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  save = e => {
    e.preventDefault();
    if (this.state.brand.length < 1) {
      this.setState({ errMessage: "Please select a Brand" });
    } else if (this.state.quantity < 1) {
      this.setState({ errMessage: "Quantity must be greater than 0" });
    } else if (this.state.price.length < 1) {
      this.setState({ errMessage: "Please enter a price" });
    } else if (this.state.package.length < 1) {
      this.setState({ errMessage: "Please select a Package" });
    } else {
      this.props.onChange(
        this.state.brand,
        this.state.brandId,
        this.state.quantity,
        this.state.cost,
        this.state.price,
        this.state.package,
        this.state.id
      );
      this.setState({
        new: false,
        editing: false
      });
    }
  };

  cancel = () => {
    this.state.new
      ? this.props.removeStrip(this.props.id)
      : this.setState({
          editing: false
        });
  };

  remove = () => {
    //e.preventDefault();
    this.props.onRemove(this.state.id);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleBrand = (value, label) => {
    this.setState({
      brand: label,
      brandId: value
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.state.signSize !== prevState.signSize ||
  //     this.state.quantity !== prevState.quantity
  //   ) {
  //     this.setSign(this.state.signSize);
  //   }
  // }

  renderForm() {
    const classes = this.props.classes;
    const {
      brands,
      stripPackages
      //width
    } = this.props;

    return (
      <Dialog
        open={this.state.editing}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Typography className={classes.formTitle}>Add/Edit Strip</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel shrink required htmlFor="account">
                      Account
                    </InputLabel>
                    <AccountSelect
                      accounts={accounts}
                      onSelectAccount={this.handleAccount}
                    />
                  </FormControl> */}
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel shrink required htmlFor="brand">
                      Brand
                    </InputLabel>
                    {/* <Select
                      value={this.state.brand}
                      onChange={this.handleChange}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          className={classes.outlinedInput}
                          name="brand"
                        />
                      }
                    >
                      {brands &&
                        brands.map(brand => (
                          <MenuItem key={brand.id} value={brand.name}>
                            {brand.name}
                          </MenuItem>
                        ))}
                    </Select> */}
                    <BrandSelect
                      value={this.state.brand}
                      brands={brands}
                      onSelectBrand={this.handleBrand}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    value={this.state.quantity}
                    variant="outlined"
                    name="quantity"
                    label="Quantity"
                    className={classNames(classes.textField, classes.dense)}
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                    type="number"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={16}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    value={this.state.price}
                    variant="outlined"
                    name="price"
                    label="Price"
                    className={classNames(classes.textField, classes.dense)}
                    margin="normal"
                    onChange={this.handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} />
                <Grid item xs={12} md={4}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel required htmlFor="package">
                      Package
                    </InputLabel>
                    <Select
                      value={
                        this.state.package.length > 0 ? this.state.package : " "
                      }
                      onChange={this.handleChange}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          className={classes.input}
                          name="package"
                        />
                      }
                    >
                      {stripPackages &&
                        stripPackages.map(pkg => (
                          <MenuItem key={pkg.id} value={pkg.name}>
                            {pkg.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography style={{ color: "red" }}>
                    {this.state.errMessage}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions style={{ padding: 20, margin: 0 }}>
          <Button
            variant="contained"
            className={classes.stripButton}
            onClick={this.cancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className={classes.stripButton}
            onClick={this.save}
          >
            <SaveIcon />
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  renderDisplay() {
    //const classes = this.props.classes;
    const width = this.props.width;
    return (
      <ListItem divider>
        {width !== "xs" ? (
          <ListItemAvatar>
            <Avatar
              style={{
                backgroundColor: "transparent",
                color: "rgba(0,0,0,0.87)",
                fontSize: "1.5rem"
              }}
            >
              {this.props.quantity}
            </Avatar>
          </ListItemAvatar>
        ) : (
          ""
        )}
        <ListItemText
          disableTypography
          primary={this.props.primary}
          secondary={this.props.secondary}
        />
        <ListItemSecondaryAction>
          {width !== "xs" ? this.props.stripCost : ""}
          <IconButton onClick={this.edit}>
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              this.props.removeStrip(this.props.id);
            }}
          >
            {" "}
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

const styledStrip = withStyles(styles)(Strip);

const mapStateToProps = state => {
  console.log(state);
  return {
    brands: state.firestore.ordered.brands,
    stripPackages: state.firestore.ordered.stripPackges
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "brands", orderBy: ["seq", "asc"] },
    { collection: "stripPackges", orderBy: ["seq", "asc"] }
  ]),
  withWidth()
)(styledStrip);
