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
              orderNumber={workorder.workorderNumber}
              account={workorder.account}
              orderType="Standard POS"
              requester={
                workorder.requesterFirstName + " " + workorder.requesterLastName
              }
              content={workorder.content}
              link={"/workorders/" + workorder.id}
              date={workorder.createdAt.toDate()}
              dueDate={workorder.dueDate.toDate()}
            />
          );
        })}
    </Grid>
  );
};

export default WorkOrderList;
