import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//import {NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  postContainer: {
    paddingBottom: "22px",
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingTop: "40px"
  },
  postTitle: {
    fontSize: "2.25em",
    lineHeight: "1.25",
    color: "#2a2f43",
    "& a": {
      color: "#2a2f43",
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.secondary.main
      }
    }
  },
  postContent: {
    color: "#7f828f",
    marginTop: "25px",
    fontSize: "1em",
    lineHeight: "24px"
  },
  postActions: {
    paddingBottom: "40px",
    paddingLeft: "40px",
    padddingRight: "40px"
  },
  postButton: {
    boxShadow: "none",
    fontSize: "0.75",
    margin: 0
  },
  media: {
    minHeight: "200px",
    objectFit: "cover"
  }
});

class ArticleCard extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Card className={classes.postCard}>
        {this.props.pic ? (
          <CardMedia
            component="img"
            title={this.props.alt}
            image={this.props.pic}
            className={classes.media}
          />
        ) : (
          ""
        )}
        <CardContent className={classes.postContainer}>
          <Typography className={classes.postTitle}>
            {this.props.title}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: this.props.content }}
            className={classes.postContent}
          />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ArticleCard);