import React from "react";
import Grid from "@material-ui/core/Grid";
import WorkOrderSummary from "./WorkOrderSummary";

const WorkOrderList = ({ workorders }) => {
  return (
    <Grid container spacing={16}>
      {workorders &&
        workorders.map(workorder => {
          return (
            <WorkOrderSummary
              workorder={workorder}
              key={workorder.id}
              account={workorder.account}
              requestor={workorder.requestor}
              content={workorder.content}
              link="#"
            />
          );
        })}
    </Grid>
  );
};

export default WorkOrderList;
