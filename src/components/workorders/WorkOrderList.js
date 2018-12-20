import React from "react";
import Grid from "@material-ui/core/Grid";
import WorkOrderSummary from "./WorkOrderSummary";

const WorkOrderList = ({ workorders }) => {
  return (
    <Grid container spacing={16}>
      {workorders &&
        workorders.sort(compareValues("dueDate", "asc")).map(workorder => {
          return (
            <WorkOrderSummary
              workorder={workorder}
              key={workorder.id}
              completedAt={workorder.completedAt}
              heldAt={workorder.heldAt}
              orderNumber={workorder.workorderNumber}
              account={workorder.account}
              items={workorder.items}
              comments={workorder.comments}
              orderType="Standard POS"
              requester={
                workorder.requesterFirstName + " " + workorder.requesterLastName
              }
              content={workorder.content}
              link={"/workorders/" + workorder.id}
              date={workorder.createdAt.toDate()}
              dueDate={workorder.dueDate.toDate()}
              isRush={workorder.isRush}
              assignedToName={workorder.assignedToName}
            />
          );
        })}
    </Grid>
  );

  function compareValues(key, order = "asc") {
    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }
};

export default WorkOrderList;
