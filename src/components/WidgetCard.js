import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  widgetContent: {
    padding: "30px"
  },
  widgetTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    marginBottom: "20px"
  },
  widgetList: {
    padding: "0"
  },
  widgetItem: {
    padding: "0",
    marginBottom: "5px",
    color: "#2a2f43"
  },
  catName: {
    textDecoration: "none",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: ".95em",
    lineHeight: "1.5em",
    "&:visited": {
      color: "inherit"
    },
    "&:hover": {
      color: theme.palette.secondary.main
    }
  }
});

class WidgetCard extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.widgetContent}>
          <Typography className={classes.widgetTitle} color="textSecondary">
            {this.props.title}
          </Typography>
          {this.props.children}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(WidgetCard);
