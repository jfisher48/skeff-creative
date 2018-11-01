import React from "react";
import Grid from "@material-ui/core/Grid";
import WorkOrderCard from "./WorkOrderCard";

const WorkOrderList = () => {
  return (
    <Grid container spacing={16}>
      <WorkOrderCard
        account="Casey's Paris"
        date="2018-10-31"
        requestor="Tim Crawley"
        content="Can I get a Case Card"
        link="#"
      />
      <WorkOrderCard
        account="Casey's Paris"
        date="2018-10-31"
        requestor="Tim Crawley"
        content="Can I get a Case Card"
        link="#"
      />
      <WorkOrderCard
        account="Casey's Paris"
        date="2018-10-31"
        requestor="Tim Crawley"
        content="Can I get a Case Card"
        link="#"
      />
    </Grid>
  );
};

export default WorkOrderList;
