import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  postContent: {
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
  postDesc: {
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

class NewsCard extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Card className={classes.postCard}>
        <CardMedia
          component="img"
          title={this.props.alt}
          image={this.props.pic}
          className={classes.media}
        />
        <CardContent className={classes.postContent}>
          <Typography className={classes.postTitle}>
            <a href="/news">{this.props.title}</a>
          </Typography>
          <Typography className={classes.postDesc} component="p">
            {this.props.content}
          </Typography>
        </CardContent>
        <CardActions className={classes.postActions}>
          <Button
            className={classes.postButton}
            variant="contained"
            size="large"
            color="secondary"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(NewsCard);
