import React from "react";
import Grid from "@material-ui/core/Grid";
import StripSetSummary from "./StripSetSummary/StripSetSummary";

const StripSetList = ({ stripsets }) => {
  return (
    <Grid container spacing={16}>
      {stripsets &&
        stripsets.sort(compareValues("dueDate", "asc")).map(stripset => {
          return (
            <StripSetSummary
              stripset={stripset}
              key={stripset.id}
              completedAt={
                stripset.completedAt && stripset.completedAt.toDate()
              }
              heldAt={stripset.heldAt && stripset.heldAt.toDate()}
              orderNumber={stripset.stripsetNumber}
              account={stripset.account}
              items={stripset.items}
              comments={stripset.comments}
              orderType={stripset.orderType}
              requester={
                stripset.requesterFirstName + " " + stripset.requesterLastName
              }
              content={stripset.content}
              link={"/shelfstrips/" + stripset.id}
              date={stripset.createdAt.toDate()}
              dueDate={stripset.dueDate.toDate()}
              isRush={stripset.isRush}
              assignedToName={stripset.assignedToName}
              cost={"$" + stripset.cost}
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

export default StripSetList;
