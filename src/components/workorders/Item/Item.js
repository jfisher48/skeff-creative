import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  Select,
  //Input,
  MenuItem,
  Grid,
  Typography,
  InputAdornment,
  OutlinedInput
} from "@material-ui/core";
import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded";
import { compose } from "recompose";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styles from "./styleItem.js";
import { getFirestore } from "redux-firestore";

class Item extends Component {
  state = {
    editing: false,
    brand: "",
    package: "",
    pkgType: "",
    pkgSize: "",
    price: "",
    signType: "",
    signSize: "",
    signTheme: "",
    quantity: "",
    sizeOptions: [],
    labelWidth: 0
  };

  // componentDidMount() {
  //   this.state.editing && this.setState({
  //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
  //   });
  // }

  edit = e => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  save = e => {
    e.preventDefault();
    alert(this.state.brand);
  };

  remove() {
    alert("removing item");
  }

  createSizeOptions = checkType => {
    const firestore = getFirestore();

    firestore
      .collection("signTypes")
      .doc(checkType)
      .get()
      .then(results => {
        var type = results.data();
        var sizes = type.sizes;
        this.setState({ sizeOptions: sizes });
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.signType !== prevState.signType) {
      this.createSizeOptions(this.state.signType);
    }
    if (this.state.editing !== prevState.editing && this.state.editing) {
      this.setState({
        labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
      });
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
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formSelect}>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
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
                      className={classes.input}
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
              <FormControl variant="outlined" className={classes.formSelect}>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  required
                  htmlFor="signTheme"
                >
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
                  {signThemes &&
                    signThemes.map(signTheme => (
                      <MenuItem key={signTheme.id} value={signTheme.id}>
                        {signTheme.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formSelect}>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  required
                  htmlFor="signType"
                >
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
              <FormControl variant="outlined" className={classes.formSelect}>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  required
                  htmlFor="signSize"
                >
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
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography>Featured Price</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                name="price"
                label="Price"
                className={classNames(classes.textField, classes.dense)}
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" className={classes.formSelect}>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  required
                  htmlFor="package"
                >
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
                      <MenuItem key={pkg.id} value={pkg.id}>
                        {pkg.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" className={classes.formSelect}>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  required
                  htmlFor="pkgSize"
                >
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
                      <MenuItem key={pkgSize.id} value={pkgSize.id}>
                        {pkgSize.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" className={classes.formSelect}>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  required
                  htmlFor="pkgType"
                >
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
                      <MenuItem key={pkgType.id} value={pkgType.id}>
                        {pkgType.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} />
        <Button onClick={this.save}>Save</Button>
        <Button>Delete</Button>
      </Grid>
    );
  }

  renderDisplay() {
    return (
      <div>
        <p>
          <span>{this.state.brand}</span>
        </p>
        <span>
          <Button onClick={this.edit}>Edit</Button>
          <Button onClick={this.remove}>Remove</Button>
        </span>
      </div>
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
    { collection: "brands", orderBy: ["name", "asc"] },
    { collection: "packages", orderBy: ["seq", "asc"] },
    { collection: "pkgSizes", orderBy: ["seq", "asc"] },
    { collection: "pkgTypes", orderBy: ["seq", "asc"] },
    { collection: "signThemes", orderBy: ["seq", "asc"] },
    { collection: "signTypes", orderBy: ["seq", "asc"] }
  ])
)(styledComponent);
