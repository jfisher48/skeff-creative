import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./styleAccountPanel";
import { Avatar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

class AccountPanel extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const classes = this.props.classes;
    const { expanded } = this.state;

    return (
      <ExpansionPanel
        className={classes.container}
        expanded={expanded === "panel1"}
        onChange={this.handleChange("panel1")}
      >
        <ExpansionPanelSummary
          className={classes.accountSummary}
          expandIcon={<ExpandMoreIcon className={classes.expand} />}
        >
          <Avatar className={classes.userAvatar}>JF</Avatar>
          <Typography className={classes.userName}>Jay Fisher</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetails}>
          <Button
            size="large"
            className={classes.logoutButton}
            onClick={this.props.signOut}
          >
            <span className={classes.buttonText}>Log Out</span>
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const styledComponent = withStyles(styles)(AccountPanel);

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(styledComponent);
