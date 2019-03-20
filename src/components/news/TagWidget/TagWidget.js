import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import jsonPrefix from "../../../data/jsonPrefix";
import { CardHeader } from "@material-ui/core";
import styles from "./styleTagWidget";

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
        <CardHeader
          className={classes.widgetHeader}
          disableTypography
          title={
            <Typography color="textSecondary" className={classes.widgetTitle}>
              Tags
            </Typography>
          }
        />
        <CardContent className={classes.widgetContent}>
          <div className={classes.tagCloud}>{tags}</div>
        </CardContent>
      </Card>
    );
  }
}

const styledTagWidget = withStyles(styles)(TagWidget);

export default styledTagWidget;
