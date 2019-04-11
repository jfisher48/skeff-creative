import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import { Grid, Divider, Badge, Tooltip, SvgIcon } from "@material-ui/core";
import {
  Dialog,
  withWidth,
  List,
  ListItem,
  ListItemText,
  DialogTitle,
  DialogActions
} from "@material-ui/core";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import StripSet from "../StripSet/StripSet";
import CommentIcon from "@material-ui/icons/Comment";
import ListIcon from "@material-ui/icons/List";
import styles from "./styleStripSetSummary.js";

class StripSetSummary extends Component {
  render() {
    const path =
      "M3023 1627c-39,92 -95,176 -167,247 -71,72 -155,128 -247,167 -97,41 -199,62 -304,62 -105,0 -207,-21 -303,-62 -48,-20 -70,-75 -50,-122 20,-48 75,-70 123,-50 145,62 315,62 461,0 70,-30 134,-73 188,-127 55,-54 97,-118 127,-188 31,-73 47,-151 47,-231 0,-80 -16,-158 -47,-231 -30,-70 -72,-133 -127,-188 -54,-54 -118,-97 -188,-127 -73,-31 -151,-46 -231,-46 -52,0 -93,-42 -93,-94 0,-52 41,-94 93,-94 105,0 207,21 304,62 92,39 176,95 247,167 72,71 128,155 167,248 41,96 62,198 62,303 0,105 -21,207 -62,304zm-1270 259c-7,5 -15,-3 -10,-10l409 -532c-1,-7 -2,-14 -2,-21 0,-98 90,-174 192,-151 56,13 101,58 114,115 23,101 -53,191 -151,191 -7,0 -14,-1 -21,-2l-531 410zm658 -1516l0 -158 30 0c58,0 106,-47 106,-106 0,-59 -48,-106 -106,-106l-271 0c-59,0 -107,47 -107,106 0,59 48,106 107,106l29 0 0 158c-92,10 -180,33 -262,67 -223,93 -461,143 -702,143l-300 0c-58,0 -106,48 -106,106 0,59 48,107 106,107 0,0 358,0 398,0 53,0 112,32 112,106 0,74 -65,106 -112,106l-1190 0c-95,0 -143,47 -143,106 0,59 48,106 106,106l991 0c57,1 104,48 104,106 0,59 -48,106 -106,106l-409 0c-58,0 -106,48 -106,106 0,59 48,106 106,106l615 0c58,0 106,48 106,106 0,59 -48,107 -106,107l-294 0c-59,0 -106,47 -106,106 0,58 47,106 106,106l226 0c234,0 468,38 681,133 149,67 319,97 498,78 453,-49 815,-425 850,-880 39,-527 -347,-972 -851,-1027zm-1944 423l131 0c58,0 106,-48 106,-107 0,-58 -48,-106 -106,-106l-131 0c-58,0 -106,48 -106,106 0,59 48,107 106,107zm-197 634c-59,0 -106,48 -106,106 0,59 47,106 106,106 58,0 106,-47 106,-106 0,-58 -48,-106 -106,-106z";
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
          <div className={classes.nameCell}>{this.props.orderNumber}</div>
          <div className={classes.tableCell}>{this.props.account}</div>
          <div className={classes.tableCell}>{this.props.displayName}</div>
          <div className={classes.tableCell}>
            <Moment format="M/DD/YY">{this.props.date}</Moment>
          </div>
          <div className={classes.tableCell}>
            <Moment format="M/DD/YY">{this.props.dueDate}</Moment>
          </div>
          <div className={classes.tableCell}>
            {/* {this.props.contains} */}
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
