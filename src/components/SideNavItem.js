import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core/List";

const styles = theme => ({
  menulink: {
    color: "#a1a1a1",
    hoverColor: "#fff"
  }
});

class SideNavItem extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const classes = this.props.classes;
    return (
      <Link
        //activeClassName='active'
        exact={this.props.isExact.toString()}
        to={this.props.linkTo}
        key={this.props.i}
        style={{ textDecoration: "none" }}
      >
        <ListItem button>
          <ListItemText
            style={{ fontSize: "12px" }}
            disableTypography
            className={classes.menulink}
            primary={this.props.primaryText}
          />
        </ListItem>
      </Link>
    );
  }
}

export default withStyles(styles)(SideNavItem);
