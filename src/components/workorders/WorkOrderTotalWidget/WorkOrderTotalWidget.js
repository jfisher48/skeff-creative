import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography
} from "@material-ui/core";
import styles from "./styleWorkOrderTotalWidget";

class WorkOrderTotalWidget extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Grid item xs={12} sm={6} lg={12}>
        <Card>
          <CardHeader
            className={classes.widgetHeader}
            disableTypography
            title={
              <Typography color="textSecondary" className={classes.widgetTitle}>
                Total Work Orders
              </Typography>
            }
          />
          <CardContent className={classes.widgetContent}>
            <div className={classes.totalWrap}>
              <Typography className={classes.totalNumber}>
                <a
                  className={classes.totalLink}
                  href="#"
                  onClick={e => {
                    this.props.handleOpenView(e);
                  }}
                >
                  {this.props.totalOpen}
                </a>
              </Typography>
              <Typography className={classes.totalText}>Open Orders</Typography>
            </div>
            <div style={{ textAlign: "center" }} className={classes.totalWrap}>
              <Typography className={classes.totalNumber}>
                <a
                  className={classes.totalLink}
                  href="#"
                  onClick={e => {
                    this.props.handleCompletedView(e);
                  }}
                >
                  {this.props.totalComplete}
                </a>
              </Typography>
              <Typography className={classes.totalText}>
                Completed Orders
              </Typography>
            </div>
            <div style={{ textAlign: "right" }} className={classes.totalWrap}>
              <Typography className={classes.totalNumber}>
                <a
                  className={classes.totalLink}
                  href="#"
                  onClick={e => {
                    this.props.handleHeldView(e);
                  }}
                >
                  {this.props.totalHeld}
                </a>
              </Typography>
              <Typography className={classes.totalText}>Held Orders</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

const styledComponent = withStyles(styles)(WorkOrderTotalWidget);

export default styledComponent;
