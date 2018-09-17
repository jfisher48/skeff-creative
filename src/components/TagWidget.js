import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
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
  tagChip: {
    backgroundColor: "rgb(0, 145, 234)",
    margin: "0 4px 4px 0",
    borderRadius: "4px",
    fontSize: "11px",
    fontWeight: "600",
    color: "white",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#0064b7"
    }
  }
});

class TagWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
  }
  componentDidMount() {
    let tagsURL = jsonPrefix + "tags?per_page=100&orderby=count&order=desc";
    fetch(tagsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          tags: response
        });
      });
  }

  render() {
    const classes = this.props.classes;
    let tags = this.state.tags.map((tag, index) => {
      return (
        <Chip
          key={index}
          label={tag.name}
          className={classes.tagChip}
          component="a"
          href={"/news/" + tag.slug}
          clickable
        />
      );
    });
    return (
      <Card className={classes.card}>
        <CardContent className={classes.widgetContent}>
          <Typography className={classes.widgetTitle} color="textSecondary">
            Tags
          </Typography>
          <div className={classes.tagCloud}>{tags}</div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(TagWidget);
