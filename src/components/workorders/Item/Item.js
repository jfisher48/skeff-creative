import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Grid
} from "@material-ui/core";
import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded";
import { compose } from "recompose";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styles from "./styleItem.js";

class Item extends Component {
  state = {
    brand: "",
    package: "",
    pkgType: "",
    pkgSize: "",
    price: "",
    signType: "",
    signSize: "",
    signTheme: "",
    quantity: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const classes = this.props.classes;
    const { brands, pkgs } = this.props;

    return (
      <Grid container spacing={8}>
        <Grid item xs={12} lg={2}>
          <FormControl className={classes.formSelect}>
            <InputLabel required htmlFor="brand">
              Brand
            </InputLabel>
            <Select
              value={this.state.brand}
              onChange={this.handleChange}
              IconComponent={KeyboardArrowDownRounded}
              input={<Input className={classes.input} name="brand" />}
            >
              {brands &&
                brands.map(brand => (
                  <MenuItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={1}>
          <FormControl className={classes.formSelect}>
            <InputLabel required htmlFor="package">
              Package
            </InputLabel>
            <Select
              value={this.state.package}
              onChange={this.handleChange}
              IconComponent={KeyboardArrowDownRounded}
              input={<Input className={classes.input} name="package" />}
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
        <Button>Save</Button>
        <Button>Delete</Button>
      </Grid>
    );
  }
}

const styledComponent = withStyles(styles)(Item);

const mapStateToProps = state => {
  // console.log(state);
  return {
    brands: state.firestore.ordered.brands,
    pkgs: state.firestore.ordered.packages
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "brands", orderBy: ["name", "asc"] },
    { collection: "packages", orderBy: ["seq", "asc"] }
  ])
)(styledComponent);
