import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Tooltip
  // Button
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
              <Tooltip title="View your open orders">
                <button
                  className={classes.totalLink}
                  onClick={e => {
                    this.props.handleOpenView(e);
                  }}
                >
                  {this.props.totalOpen}
                </button>
              </Tooltip>
              <Typography className={classes.totalText}>Open Orders</Typography>
            </div>
            <div style={{ textAlign: "center" }} className={classes.totalWrap}>
              <Tooltip title="View your completed orders">
                <button
                  className={classes.totalLink}
                  href="#"
                  onClick={e => {
                    this.props.handleCompletedView(e);
                  }}
                >
                  {this.props.totalComplete}
                </button>
              </Tooltip>
              <Typography className={classes.totalText}>
                Completed Orders
              </Typography>
            </div>
            <div style={{ textAlign: "right" }} className={classes.totalWrap}>
              <Tooltip title="View orders on hold">
                <button
                  className={classes.totalLink}
                  href="#"
                  onClick={e => {
                    this.props.handleHeldView(e);
                  }}
                >
                  {this.props.totalHeld}
                </button>
              </Tooltip>
              <Typography className={classes.totalText}>Held Orders</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

const styledWorkOrderTotalWidget = withStyles(styles)(WorkOrderTotalWidget);

export default styledWorkOrderTotalWidget;
