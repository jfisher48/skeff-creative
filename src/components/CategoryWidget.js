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
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import jsonPrefix from "../data/jsonPrefix";

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
    flex: "1",
    color: "rgb(42,47,67)",
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
  },
  count: {
    fontWeight: "600",
    fontSize: "13px",
    float: "right",
    color: "rgb(0, 145, 234)"
  }
});

class CategoryWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    let categoriesURL =
      jsonPrefix + "categories?per_page=100&filter[orderby]=name&order=asc";
    fetch(categoriesURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          categories: response
        });
      });
  }

  render() {
    const classes = this.props.classes;
    let categories = this.state.categories.map((category, index) => {
      return (
        <ListItem className={classes.widgetListItem} key={index}>
          <ListItemIcon>
            <FiberManualRecord
              style={{ fontSize: 10, color: "rgb(0, 145, 234)" }}
            />
          </ListItemIcon>
          <a className={classes.widgetAnchor} href={"/news/" + category.slug}>
            {category.name}
          </a>
          <span className={classes.count}>{category.count}</span>
        </ListItem>
      );
    });
    return (
      <Card className={classes.card}>
        <CardContent className={classes.widgetContent}>
          <Typography className={classes.widgetTitle} color="textSecondary">
            Categories
          </Typography>
          <List className={classes.widgetList}>{categories}</List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CategoryWidget);
