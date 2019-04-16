import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Page,
  Text,
  View,
  Document
  //PDFViewer,
  //Image
} from "@react-pdf/renderer";
//import { connect } from "react-redux";
//import { firestoreConnect } from "react-redux-firebase";
//import { compose } from "recompose";
import styles from "./styleWorkOrderPDF";
import moment from "moment";

export class WorkOrderPDF extends Component {
  render() {
    //const classes = this.props.classes;
    const { workorders } = this.props;
    console.log(workorders);
    return (
      <Document>
        {workorders &&
          workorders.sort(compareValues("dueDate", "asc")).map(workorder => {
            var createdAtDate = workorder.createdAt.toDate();
            var createdAtMoment = moment(createdAtDate).format(
              "M/DD/YY [at] h:mm A"
            );
            var dueOnDate = workorder.dueDate.toDate();
            var dueOnMoment = moment(dueOnDate).format("M/DD/YY [at] h:mm A");

            return (
              <Page
                key={workorder.id}
                size="letter"
                orientation="landscape"
                style={styles.page}
              >
                <View style={styles.header}>
                  {/* <Image src="http://localhost:3000/android-chrome-192x192.png" /> */}
                  <Text>Work Order Detail</Text>
                  <Text>#{workorder.id}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={styles.accountText}>{workorder.account}</Text>
                </View>
                <View style={styles.container}>
                  <View style={styles.detailColumn}>
                    <View style={styles.detailRow}>
                      <Text>WO TYPE:</Text>
                      <Text style={styles.detailValue}>
                        {workorder.orderType}
                      </Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text>CREATED BY:</Text>
                      <Text style={styles.detailValue}>
                        {workorder.requesterFirstName}{" "}
                        {workorder.requesterLastName}
                      </Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text>ASSIGNED TO:</Text>
                      <Text style={styles.detailValue}>
                        {workorder.assignedToName}
                      </Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text>STATUS:</Text>
                      <Text style={styles.detailValue}>Assigned</Text>
                    </View>
                  </View>
                  <View style={styles.detailColumn}>
                    <View style={styles.detailRow}>
                      <Text style={styles.rushLabel}>Rush:</Text>
                      {workorder.isRush ? (
                        <Text style={styles.rushText}>PLEASE RUSH</Text>
                      ) : (
                        <Text />
                      )}
                    </View>
                    <View style={styles.detailRow}>
                      <Text>CREATED ON:</Text>
                      <Text style={styles.detailValue}>{createdAtMoment}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text>DUE ON:</Text>
                      <Text style={styles.detailValue}>{dueOnMoment}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text> </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.container}>
                  {workorder.comments.length > 0 ? (
                    <View style={styles.comments}>
                      <Text style={styles.commentLabel}>Comments:</Text>
                      <Text style={styles.commentValue}>
                        {workorder.comments}
                      </Text>
                    </View>
                  ) : (
                    <Text />
                  )}
                </View>
                <View style={styles.itemsWrapper}>
                  {workorder.items &&
                    workorder.items.map((item, i) => {
                      return (
                        <View key={i} style={styles.itemContainer}>
                          <View style={styles.itemQ}>
                            <Text>{item.quantity}</Text>
                          </View>
                          <View
                            style={
                              workorder.items.length > 1
                                ? styles.itemRow
                                : styles.singleItemRow
                            }
                          >
                            <View style={styles.itemCol}>
                              <View style={styles.itemPrimary}>
                                <Text style={styles.itemText}>
                                  {item.brand} {item.signTheme}
                                </Text>
                                <Text style={styles.itemText}>
                                  {item.signDimensions} {item.signTypeName}
                                </Text>
                              </View>
                              <View style={styles.itemSecondary}>
                                <Text style={styles.itemText}>
                                  ${item.price} {item.package} {item.pkgSize}{" "}
                                  {item.pkgType}
                                </Text>
                              </View>
                            </View>
                            <View style={styles.itemCol}>
                              <Text style={styles.itemText}>${item.cost}</Text>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  <View style={styles.itemContainer}>
                    <View style={styles.totalRow}>
                      <View style={styles.itemCol}>
                        <Text style={styles.totalText}>
                          Total: ${workorder.cost}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <Text
                  style={styles.pageNumber}
                  render={({ pageNumber, totalPages }) =>
                    `Page ${pageNumber} of ${totalPages}`
                  }
                  fixed
                />
              </Page>
            );
          })}
      </Document>
    );
  }
}

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

const styledWorkOrderPDF = withStyles(styles)(WorkOrderPDF);

export default styledWorkOrderPDF;
