import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
//import CardContent from "@material-ui/core/CardContent";
//import { NavLink } from "react-router-dom";
//import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
//import { Grid, Divider, Badge, Tooltip, SvgIcon } from "@material-ui/core";
import {
  //Dialog,
  //withWidth,
  //List,
  ListItem
  //ListItemText,
  //DialogTitle,
  //DialogActions
} from "@material-ui/core";
//import SummaryHeader from "../SummaryHeader/SummaryHeader";
import StripSet from "../StripSet/StripSet";
//import CommentIcon from "@material-ui/icons/Comment";
//import ListIcon from "@material-ui/icons/List";
import styles from "./styleStripSetSummary.js";

class StripSetSummary extends Component {
  render() {
    const classes = this.props.classes;
    const stripset = this.props;
    //const stripset = this.props;
    return (
      <React.Fragment>
        <ListItem
          alignItems="flex-start"
          key={this.props.id}
          className={classes.tableRow}
        >
          <div className={classes.nameCell}>
            {this.props.account}{" "}
            {this.props.description && this.props.description.length > 0
              ? this.props.description
              : ""}
          </div>
          <div className={classes.tableCell}>{this.props.displayName}</div>
          <div className={classes.tableCell}>{this.props.contains}</div>
          <div className={classes.tableCell}>
            <Moment format="M/DD/YY">{this.props.date}</Moment>
          </div>
          <div className={classes.tableCell}>
            <Moment format="M/DD/YY">{this.props.dueDate}</Moment>
          </div>
          <div className={classes.tableCell}>
            <StripSet key={stripset.id} stripset={this.props.stripset} />
          </div>
        </ListItem>
      </React.Fragment>
      // <Grid item xs={12} sm={6}>
      //   <NavLink to={this.props.link}>
      //     <Card className={classes.orderCard}>
      //       <SummaryHeader
      //         orderNumber={this.props.orderNumber}
      //         dueDate={this.props.dueDate}
      //       />
      //       <CardContent className={classes.orderContainer}>
      //         <Typography variant="h6" className={classes.orderTitle}>
      //           {this.props.account}
      //         </Typography>
      //         <Typography className={classes.orderLabel} variant="subtitle1">
      //           WO TYPE:{" "}
      //           <span className={classes.orderInfo}>
      //             {this.props.orderType}
      //           </span>
      //         </Typography>
      //         <Typography className={classes.orderLabel} variant="subtitle1">
      //           CREATED BY:{" "}
      //           <span className={classes.orderInfo}>
      //             {this.props.requester}
      //           </span>
      //         </Typography>
      //         <Typography className={classes.orderLabel} variant="subtitle1">
      //           CREATED ON:{" "}
      //           <span className={classes.orderInfo}>
      //             <Moment format="M.DD.YY [at] h:mm A">
      //               {this.props.date}
      //             </Moment>
      //           </span>
      //         </Typography>
      //         <Typography className={classes.orderLabel} variant="subtitle1">
      //           ASSIGNED TO:{" "}
      //           <span className={classes.orderInfo}>
      //             {this.props.assignedToName}
      //           </span>
      //         </Typography>
      //         <Typography className={classes.orderLabel} variant="subtitle1">
      //           ESTIMATED COST:{" "}
      //           <span className={classes.orderInfo}>{this.props.cost}</span>
      //         </Typography>
      //         <Divider className={classes.divider} />
      //         <Grid container spacing={8}>
      //           <Grid item xs={12} className={classes.badgeContainer}>
      //             {!this.props.completedAt ? (
      //               !this.props.heldAt ? (
      //                 this.props.dueDate - Date.now() >= 43200000 ? (
      //                   <span className={classes.noAlert} />
      //                 ) : this.props.dueDate < Date.now() ? (
      //                   <span className={classes.redAlert}>OVERDUE</span>
      //                 ) : (
      //                   <span className={classes.yellowAlert}>DUE SOON</span>
      //                 )
      //               ) : (
      //                 <span className={classes.orangeAlert}>ON HOLD</span>
      //               )
      //             ) : (
      //               <span className={classes.greenAlert}>COMPLETED</span>
      //             )}
      //             <Tooltip
      //               title={
      //                 "This order contains " +
      //                 this.props.strips.length +
      //                 " strips(s)"
      //               }
      //             >
      //               <span style={{ marginRight: "20px" }}>
      //                 <Badge
      //                   badgeContent={this.props.strips.length}
      //                   classes={{ badge: classes.badge }}
      //                   color="secondary"
      //                 >
      //                   <ListIcon className={classes.listIcon} />
      //                 </Badge>
      //               </span>
      //             </Tooltip>
      //             {this.props.comments ? (
      //               <CommentIcon className={classes.commentIcon} />
      //             ) : (
      //               ""
      //             )}
      //             {this.props.isRush ? (
      //               <span className={classes.rush}>
      //                 <SvgIcon
      //                   className={classes.rushIcon}
      //                   viewBox="0 0 3265 2282"
      //                 >
      //                   <path d={path} />
      //                 </SvgIcon>
      //                 Please Rush
      //               </span>
      //             ) : (
      //               ""
      //             )}
      //           </Grid>
      //           <Grid item xs={12}>
      //             <span className={classes.fromNowText}>
      //               {this.props.completedAt
      //                 ? "Order was completed"
      //                 : this.props.heldAt
      //                   ? "Order was placed on hold"
      //                   : this.props.dueDate < Date.now()
      //                     ? "Order was due"
      //                     : "Order is due"}{" "}
      //               {!this.props.completedAt && !this.props.heldAt ? (
      //                 <Moment fromNow>{this.props.dueDate}</Moment>
      //               ) : (
      //                 <Moment fromNow>
      //                   {this.props.heldAt || this.props.completedAt}
      //                 </Moment>
      //               )}
      //             </span>
      //           </Grid>
      //         </Grid>
      //       </CardContent>
      //     </Card>
      //   </NavLink>
      // </Grid>
    );
  }
}

export default withStyles(styles)(StripSetSummary);
