import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid
} from "@material-ui/core";
import WorkOrderCard from "./WorkOrderCard";

const WorkOrderList = () => {
  return (
    <Grid container spacing={16}>
      <WorkOrderCard
        account="Casey's Paris"
        date="10/31/18"
        requestor="Tim Crawley"
        content="Can I get a Case Card"
        link="#"
      />
      <WorkOrderCard
        account="Casey's Paris"
        date="10/31/18"
        requestor="Tim Crawley"
        content="Can I get a Case Card"
        link="#"
      />
      <WorkOrderCard
        account="Casey's Paris"
        date="10/31/18"
        requestor="Tim Crawley"
        content="Can I get a Case Card"
        link="#"
      />
    </Grid>
  );
};

export default WorkOrderList;
