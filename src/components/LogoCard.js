import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ShareIcon from "@material-ui/icons/Share";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import googleDownload from "../data/googleDownload";
import googleShare from "../data/googleShare";

const styles = theme => ({
  cardContainer: {
    paddingBottom: "15px",
    paddingRight: "15px",
    paddingLeft: "15px",
    paddingTop: "15px"
  },
  cardTitle: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: "1em",
    color: "#2a2f43"
  },
  cardInfo: {
    color: "#7f828f",
    fontSize: "0.75em",
    fontWeight: "600",
    "& a": {
      color: "rgb(0,145,234)",
      textDecoration: "none",
      "&:hover": {
        color: "#0064b7"
      }
    }
  },
  cardContent: {
    color: "#7f828f",
    marginTop: "25px",
    fontSize: "1em",
    lineHeight: "24px"
  },
  cardActions: {
    textAlign: "center",
    display: "block",
    paddingBottom: "15px",
    paddingTop: "0",
    textDecoration: "none"
  },
  cardLink: {
    margin: "0 auto"
  },
  NavLink: {
    margin: "0 auto"
  },
  cardButton: {
    boxShadow: "none",
    fontSize: "0.75",
    margin: 0,
    marginRight: "5px",
    marginLeft: "5px",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      width: "120px"
    }
  },
  buttonText: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  rightIcon: {
    marginLeft: "6px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px"
    }
  },
  media: {
    minHeight: "100px",
    objectFit: "cover"
  }
});

class LogoCard extends Component {
  componentWillMount() {
    this.sharelink = encodeURI(googleShare + this.props.linkID);
  }
  render() {
    const classes = this.props.classes;
    return (
      <Grid item xs={12} sm={6} lg={4} xl={3}>
        <Card>
          <CardMedia
            component="img"
            title={this.props.alt}
            image={this.props.pic}
            className={classes.media}
          />
          <CardContent className={classes.cardContainer}>
            <Typography className={classes.cardTitle}>
              {this.props.title}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <a href={googleDownload + this.props.linkID} className="cardLink">
              <Tooltip title="Download Logo Package">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.cardButton}
                >
                  <span className={classes.buttonText}>Download</span>
                  <CloudDownloadIcon className={classes.rightIcon} />
                </Button>
              </Tooltip>
            </a>
            <a
              href={
                "mailto:?subject=Your%20Requested%20" +
                this.props.title +
                "%20Logo Package&body=Here%20are%20the%20logos%20you%20requested%3A%20" +
                this.sharelink
              }
              className="cardLink"
            >
              <Tooltip title="Share Download Link">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.cardButton}
                >
                  <span className={classes.buttonText}>Share</span>
                  <ShareIcon className={classes.rightIcon} />
                </Button>
              </Tooltip>
            </a>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(LogoCard);
