import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Grid,
  Typography
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
    quantity: "",
    sizeOptions: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSelectSignType = e => {
    this.setState({
      [e.target.name]: e.target.value.id,
      sizeOptions: [e.target.value.sizes]
    });
    console.log(this.state.sizeOptions);
  };

  render() {
    const classes = this.props.classes;
    const { brands, pkgs, pkgTypes, signThemes, signTypes } = this.props;

    const sizes = this.state.sizeOptions;
    console.log(sizes);

    const sizeSelect =
      sizes.length > 0 &&
      sizes[0].map((size, i) => {
        console.log(size);
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
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formSelect}>
                <InputLabel required htmlFor="signTheme">
                  Theme
                </InputLabel>
                <Select
                  value={this.state.signTheme}
                  onChange={this.handleChange}
                  IconComponent={KeyboardArrowDownRounded}
                  input={<Input className={classes.input} name="signTheme" />}
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
              <FormControl className={classes.formSelect}>
                <InputLabel required htmlFor="signType">
                  Sign Type
                </InputLabel>
                <Select
                  value={this.state.signType}
                  onChange={this.onSelectSignType}
                  IconComponent={KeyboardArrowDownRounded}
                  input={<Input className={classes.input} name="signType" />}
                >
                  {signTypes &&
                    signTypes.map(signType => (
                      <MenuItem key={signType.id} value={signType}>
                        {signType.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formSelect}>
                <InputLabel required htmlFor="signSize">
                  Sign Size
                </InputLabel>
                <Select
                  value={this.state.signSize}
                  onChange={this.handleChange}
                  IconComponent={KeyboardArrowDownRounded}
                  input={<Input className={classes.input} name="signSize" />}
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
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
              <FormControl className={classes.formSelect}>
                <InputLabel required htmlFor="pkgType">
                  Pkg Type
                </InputLabel>
                <Select
                  value={this.state.pkgType}
                  onChange={this.handleChange}
                  IconComponent={KeyboardArrowDownRounded}
                  input={<Input className={classes.input} name="pkgType" />}
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
    pkgs: state.firestore.ordered.packages,
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
    { collection: "pkgTypes", orderBy: ["seq", "asc"] },
    { collection: "signThemes", orderBy: ["seq", "asc"] },
    { collection: "signTypes", orderBy: ["seq", "asc"] }
  ])
)(styledComponent);
