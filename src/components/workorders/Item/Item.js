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
import styles from "./styleItem.js";
import { getFirestore } from "redux-firestore";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import BrandSelect from "../../BrandSelect/BrandSelect.js";

class Item extends Component {
  state = {
    editing: this.props.editing,
    new: this.props.new,
    id: this.props.id,
    brand: this.props.brand,
    cost: 0,
    package: this.props.package,
    pkgType: this.props.pkgType,
    pkgSize: this.props.pkgSize,
    quantity: 1,
    price: this.props.price,
    signType: this.props.signType,
    signTypeName: this.props.signTypeName,
    signSize: this.props.signSize,
    signDimensions: this.props.signDimensions,
    signTheme: this.props.signTheme,
    labelWidth: 0,
    errMessage: ""
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
    if (this.state.brand.length < 1) {
      this.setState({ errMessage: "Please select a Brand" });
    } else if (this.state.signTheme.length < 1) {
      this.setState({ errMessage: "Please select a Theme" });
    } else if (this.state.signType.length < 1) {
      this.setState({ errMessage: "Please select a Sign Type" });
    } else if (this.state.signSize.length < 1) {
      this.setState({ errMessage: "Please select a Sign Size" });
    } else if (this.state.quantity < 1) {
      this.setState({ errMessage: "Quantity must be greater than 0" });
    } else if (this.state.price.length < 1) {
      this.setState({ errMessage: "Please enter a price" });
    } else if (this.state.signTheme.length < 1) {
      this.setState({ errMessage: "Please select a theme" });
    } else if (this.state.package.length < 1) {
      this.setState({ errMessage: "Please select a Package" });
    } else if (this.state.pkgSize.length < 1) {
      this.setState({ errMessage: "Please select a Package Size" });
    } else if (this.state.pkgType.length < 1) {
      this.setState({ errMessage: "Please select a Package Type" });
    } else {
      this.props.onChange(
        this.state.brand,
        this.state.signTheme,
        this.state.signType,
        this.state.signTypeName,
        this.state.signSize,
        this.state.signDimensions,
        this.state.quantity,
        this.state.cost,
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
    }
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

  setTypeName = checkType => {
    const firestore = getFirestore();

    firestore
      .collection("signTypes")
      .doc(checkType)
      .get()
      .then(results => {
        var type = results.data();
        var name = type.name;
        this.setState({
          signTypeName: name
        });
      });
  };

  setSign = checkSize => {
    const firestore = getFirestore();

    firestore
      .collection("signSizes")
      .doc(checkSize)
      .get()
      .then(results => {
        var size = results.data();
        var name = size.dimensions;
        var cost = size.cost * this.state.quantity;
        this.setState({
          signDimensions: name,
          cost: cost
        });
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleBrand = (value, label) => {
    this.setState({
      brand: label
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.signType !== prevState.signType) {
      this.setTypeName(this.state.signType);
    }
    if (
      this.state.signSize !== prevState.signSize ||
      this.state.quantity !== prevState.quantity
    ) {
      this.setSign(this.state.signSize);
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
      signTypes,
      signSizes
      //width
    } = this.props;

    const sizes = signSizes
      ? signSizes.filter(size => {
          return size.type === this.state.signType;
        })
      : 0;

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
          <MenuItem key={i} value={size.id}>
            {size.dimensions}
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
                <Grid item xs={12}>
                  <Typography style={{ color: "red" }}>
                    {this.state.errMessage}
                  </Typography>
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
          {width !== "xs" ? this.props.itemCost : ""}
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

const styledItem = withStyles(styles)(Item);

const mapStateToProps = state => {
  // console.log(state);
  return {
    brands: state.firestore.ordered.brands,
    pkgs: state.firestore.ordered.packages,
    pkgSizes: state.firestore.ordered.pkgSizes,
    pkgTypes: state.firestore.ordered.pkgTypes,
    signThemes: state.firestore.ordered.signThemes,
    signTypes: state.firestore.ordered.signTypes,
    signSizes: state.firestore.ordered.signSizes
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
    { collection: "signTypes", orderBy: ["seq", "asc"] },
    { collection: "signSizes" }
  ]),
  withWidth()
)(styledItem);
