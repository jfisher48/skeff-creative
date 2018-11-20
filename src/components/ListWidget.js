import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  List,
  ListItem,
  ListItemIcon
} from "../../node_modules/@material-ui/core";
import PlayArrow from "@material-ui/icons/PlayArrow";

const styles = theme => ({
  widgetContent: {
    padding: "30px"
  },
  widgetTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    marginBottom: "20px",
    lineHeight: "1"
  },
  widgetList: {
    padding: "0"
  },
  widgetListItem: {
    padding: "0",
    marginBottom: "5px",
    color: "#2a2f43"
  },
  widgetAnchor: {
    textDecoration: "none",
    //fontFamily: "Roboto",
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

class ListWidget extends Component {
  render() {
    const classes = this.props.classes;
    const list = this.props.list.map((prop, index) => {
      return (
        <ListItem className={classes.widgetListItem} key={index}>
          <ListItemIcon>
            <PlayArrow style={{ fontSize: 13 }} />
          </ListItemIcon>
          <a className={classes.widgetAnchor} href="/">
            {prop.itemName}
          </a>
        </ListItem>
      );
    });
    return (
      <Card className={classes.card}>
        <CardContent className={classes.widgetContent}>
          <Typography className={classes.widgetTitle} color="textSecondary">
            {this.props.title}
          </Typography>
          <List className={classes.widgetList}>{list}</List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ListWidget);
