import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import { Grid } from "@material-ui/core";
import SummaryHeader from "./SummaryHeader/SummaryHeader";

const styles = theme => ({
  orderContainer: {
    padding: "20px 26px"
  },
  cardHeader: {
    backgroundColor: "#b1adaa",
    width: "100%"
  },
  orderTitle: {
    marginBottom: "15px",
    color: "rgba(0,0,0,0.87)",
    fontWeight: "500"
  },
  orderLabel: {
    color: "rgba(0,0,0,0.54)",
    lineHeight: "1.5"
  },
  orderInfo: {
    color: "rgba(0,0,0,0.87)",
    fontWeight: "400"
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

class WorkOrderSummary extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Grid item xs={12} sm={6}>
        <NavLink to={this.props.link}>
          <Card className={classes.orderCard}>
            <SummaryHeader
              orderNumber={this.props.orderNumber}
              dueDate={this.props.dueDate}
            />
            <CardContent className={classes.orderContainer}>
              <Typography variant="h3" className={classes.orderTitle}>
                {this.props.account}
              </Typography>
              <Typography className={classes.orderLabel} variant="h4">
                WO TYPE:{" "}
                <span className={classes.orderInfo}>
                  {this.props.orderType}
                </span>
              </Typography>
              <Typography className={classes.orderLabel} variant="h4">
                CREATED BY:{" "}
                <span className={classes.orderInfo}>
                  {this.props.requester}
                </span>
              </Typography>
              <Typography className={classes.orderLabel} variant="h4">
                CREATED ON:{" "}
                <span className={classes.orderInfo}>
                  <Moment format="M.DD.YY [at] h:mm A">
                    {this.props.date}
                  </Moment>
                </span>
              </Typography>
              <Typography className={classes.orderLabel} variant="h4">
                ASSIGNED TO:{" "}
                <span className={classes.orderInfo}>Jay Fisher</span>
              </Typography>
            </CardContent>
            {/* <CardActions className={classes.orderActions}>
            <Link to={this.props.link} className="postLink">
              <Button
                className={classes.orderButton}
                variant="contained"
                size="large"
                color="secondary"
              >
                View / Edit
              </Button>
            </Link>
          </CardActions> */}
          </Card>
        </NavLink>
      </Grid>
    );
  }
}

export default withStyles(styles)(WorkOrderSummary);
