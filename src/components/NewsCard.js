import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CategoryLink from "../components/CategoryLink";
import Moment from "react-moment";

const styles = theme => ({
  postContainer: {
    paddingBottom: "22px",
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingTop: "40px"
  },
  postTitle: {
    marginBottom: "15px",
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
  postInfo: {
    color: "#7f828f",
    fontSize: "0.75em",
    fontWeight: "700",
    "& a": {
      color: "rgb(0,145,234)",
      textDecoration: "none",
      "&:hover": {
        color: "#0064b7"
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
    padddingRight: "40px",
    textDecoration: "none"
  },
  postLink: {
    margin: 0
  },
  NavLink: {
    margin: 0
  },
  postButton: {
    boxShadow: "none",
    fontSize: "0.75",
    margin: 0,
    textDecoration: "none"
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
            <a href={this.props.link}>{this.props.title}</a>
          </Typography>
          <Typography className={classes.postInfo}>
            <Moment format="MMMM Do, YYYY">{this.props.date}</Moment> by{" "}
            {this.props.author} in <CategoryLink id={this.props.category} />
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: this.props.excerpt }}
            className={classes.postContent}
          />
        </CardContent>
        <CardActions className={classes.postActions}>
          <NavLink to={this.props.link} className="postLink">
            <Button
              className={classes.postButton}
              variant="contained"
              size="large"
              color="secondary"
            >
              Learn More
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(NewsCard);
