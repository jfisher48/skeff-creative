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
  ListItemSecondaryAction
} from "@material-ui/core";
import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded";
import { compose } from "recompose";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styles from "./styleItem.js";
import { getFirestore } from "redux-firestore";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

class Item extends Component {
  state = {
    editing: this.props.editing,
    new: this.props.new,
    id: this.props.id,
    brand: this.props.brand,
    package: this.props.package,
    pkgType: this.props.pkgType,
    pkgSize: this.props.pkgSize,
    quantity: 1,
    price: this.props.price,
    signType: this.props.signType,
    signTypeName: this.props.signTypeName,
    signSize: this.props.signSize,
    signTheme: this.props.signTheme,
    sizeOptions: [],
    labelWidth: 0
  };

  componentDidMount() {
    if (this.state.signType.length > 0) {
      this.createSizeOptions(this.state.signType);
    }
  }

  edit = e => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  save = e => {
    e.preventDefault();
    this.props.onChange(
      this.state.brand,
      this.state.signTheme,
      this.state.signType,
      this.state.signTypeName,
      this.state.signSize,
      this.state.quantity,
      this.state.price,
      this.state.package,
      this.state.pkgSize,
      this.state.pkgType,
      this.state.id
    );
    this.setState({
      new: false,
      editing: false
    });
  };

  cancel = () => {
    this.state.new
      ? this.props.removeItem(this.props.id)
      : this.setState({
          editing: false
        });
  };

  remove = () => {
    //e.preventDefault();
    this.props.onRemove(this.state.id);
  };

  createSizeOptions = checkType => {
    const firestore = getFirestore();

    firestore
      .collection("signTypes")
      .doc(checkType)
      .get()
      .then(results => {
        var type = results.data();
        var sizes = type.sizes;
        var name = type.name;
        this.setState({
          sizeOptions: sizes,
          signTypeName: name
        });
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleSignTypeChange = e => {
    this.setState({
      signType: e.target.key,
      signTypeName: e.target.value
    });
    console.log(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.signType !== prevState.signType) {
      this.createSizeOptions(this.state.signType);
    }
  }

  renderForm() {
    const classes = this.props.classes;
    const {
      brands,
      pkgs,
      pkgSizes,
      pkgTypes,
      signThemes,
      signTypes
    } = this.props;

    const sizes = this.state.sizeOptions;

    const availableThemes =
      signThemes &&
      signThemes.filter(theme => {
        return (
          theme.isActive &&
          (theme.brand === "All" || this.state.brand === theme.brand)
        );
      });

    const sizeSelect =
      sizes.length > 0 &&
      sizes.map((size, i) => {
        return (
          <MenuItem key={i} value={size}>
            {size}
          </MenuItem>
        );
      });

    return (
      <Dialog
        open={this.state.editing}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Typography className={classes.formTitle}>Add Item</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel
                      FormLabelClasses={classes.mylabel}
                      required
                      htmlFor="brand"
                    >
                      Brand
                    </InputLabel>
                    <Select
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
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel required htmlFor="signTheme">
                      Theme
                    </InputLabel>
                    <Select
                      value={this.state.signTheme}
                      onChange={this.handleChange}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          className={classes.input}
                          name="signTheme"
                        />
                      }
                    >
                      {availableThemes &&
                        availableThemes.map(signTheme => (
                          <MenuItem key={signTheme.id} value={signTheme.name}>
                            {signTheme.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel required htmlFor="signType">
                      Sign Type
                    </InputLabel>
                    <Select
                      value={this.state.signType}
                      displayEmpty
                      onChange={this.handleChange}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          className={classes.input}
                          name="signType"
                        />
                      }
                    >
                      {signTypes &&
                        signTypes.map(signType => (
                          <MenuItem key={signType.id} value={signType.id}>
                            {signType.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel required htmlFor="signSize">
                      Sign Size
                    </InputLabel>
                    <Select
                      value={this.state.signSize}
                      onChange={this.handleChange}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          className={classes.input}
                          name="signSize"
                        />
                      }
                    >
                      {sizeSelect}
                    </Select>
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
              <Typography>Featured Price</Typography>
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
                      value={this.state.package}
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
                      {pkgs &&
                        pkgs.map(pkg => (
                          <MenuItem key={pkg.id} value={pkg.name}>
                            {pkg.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel required htmlFor="pkgSize">
                      Pkg Size
                    </InputLabel>
                    <Select
                      value={this.state.pkgSize}
                      onChange={this.handleChange}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          className={classes.input}
                          name="pkgSize"
                        />
                      }
                    >
                      {pkgSizes &&
                        pkgSizes.map(pkgSize => (
                          <MenuItem key={pkgSize.id} value={pkgSize.name}>
                            {pkgSize.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl variant="filled" className={classes.formSelect}>
                    <InputLabel required htmlFor="pkgType">
                      Pkg Type
                    </InputLabel>
                    <Select
                      value={this.state.pkgType}
                      onChange={this.handleChange}
                      IconComponent={KeyboardArrowDownRounded}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          className={classes.input}
                          name="pkgType"
                        />
                      }
                    >
                      {pkgTypes &&
                        pkgTypes.map(pkgType => (
                          <MenuItem key={pkgType.id} value={pkgType.name}>
                            {pkgType.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.cancel}>Cancel</Button>
          <Button onClick={this.save}>
            <SaveIcon />
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  renderDisplay() {
    const classes = this.props.classes;
    return (
      <ListItem divider>
        <ListItemText
          disableTypography
          primary={this.props.primary}
          secondary={this.props.secondary}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={this.edit}>
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              this.props.removeItem(this.props.id);
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

const styledComponent = withStyles(styles)(Item);

const mapStateToProps = state => {
  // console.log(state);
  return {
    brands: state.firestore.ordered.brands,
    pkgs: state.firestore.ordered.packages,
    pkgSizes: state.firestore.ordered.pkgSizes,
    pkgTypes: state.firestore.ordered.pkgTypes,
    signThemes: state.firestore.ordered.signThemes,
    signTypes: state.firestore.ordered.signTypes
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "brands", orderBy: ["seq", "asc"] },
    { collection: "packages", orderBy: ["seq", "asc"] },
    { collection: "pkgSizes", orderBy: ["seq", "asc"] },
    { collection: "pkgTypes", orderBy: ["seq", "asc"] },
    { collection: "signThemes", orderBy: ["seq", "asc"] },
    { collection: "signTypes", orderBy: ["seq", "asc"] }
  ])
)(styledComponent);
