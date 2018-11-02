import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
//import { NavLink } from "react-router-dom";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import CategoryLink from "../components/CategoryLink";
import Moment from "react-moment";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  orderContainer: {
    paddingBottom: "22px",
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingTop: "40px"
  },
  orderTitle: {
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
  orderInfo: {
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
  orderContent: {
    color: "#7f828f",
    marginTop: "25px",
    fontSize: "1em",
    lineHeight: "24px"
  },
  orderActions: {
    paddingBottom: "40px",
    paddingLeft: "40px",
    padddingRight: "40px",
    textDecoration: "none"
  },
  orderLink: {
    margin: 0
  },
  NavLink: {
    margin: 0
  },
  orderButton: {
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

class WorkOrderDetail extends Component {
  render() {
    const classes = this.props.classes;
    const id = this.props.match.params.id;
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Card className={classes.orderCard}>
            <CardContent className={classes.orderContainer}>
              <Typography className={classes.orderTitle}>
                <a href={this.props.link}>
                  {this.props.account} WO
                  {id}
                </a>
              </Typography>
              <Typography className={classes.orderInfo}>
                <Moment format="MMMM Do, YYYY">{this.props.date}</Moment> by{" "}
                {this.props.requestor}
              </Typography>
              <Typography className={classes.orderContent}>
                {this.props.content}
              </Typography>
            </CardContent>
            {/* <CardActions className={classes.orderActions}>
            <NavLink to={this.props.link} className="postLink">
              <Button
                className={classes.orderButton}
                variant="contained"
                size="large"
                color="secondary"
              >
                View / Edit
              </Button>
            </NavLink>
          </CardActions> */}
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(WorkOrderDetail);
