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
      <Grid item xs={12}>
        <Card>
          <CardHeader
            className={classes.widgetHeader}
            disableTypography
            title={
              <Typography color="textSecondary" className={classes.widgetTitle}>
                Total Workorders
              </Typography>
            }
          />
          <CardContent className={classes.widgetContent}>
            <div className={classes.totalWrap}>
              <Typography className={classes.totalNumber}>
                {this.props.totalIncomplete}
              </Typography>
              <Typography className={classes.totalText}>
                Incomplete Orders
              </Typography>
            </div>
            <div style={{ textAlign: "center" }} className={classes.totalWrap}>
              <Typography className={classes.totalNumber}>0</Typography>
              <Typography className={classes.totalText}>
                Completed Orders
              </Typography>
            </div>
            <div style={{ textAlign: "right" }} className={classes.totalWrap}>
              <Typography className={classes.totalNumber}>0</Typography>
              <Typography className={classes.totalText}>
                Quarantined Orders
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

const styledComponent = withStyles(styles)(WorkOrderTotalWidget);

export default styledComponent;
