import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Image
} from "@react-pdf/renderer";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import styles from "./styleWorkOrderPDF";
import moment from "moment";

export class WorkOrderPDF extends Component {
  render() {
    const classes = this.props.classes;
    const { workorders, auth, profile } = this.props;
    console.log(workorders);
    return (
      // <PDFViewer width="100%" height="800">

      <Document>
        {workorders &&
          workorders.sort(compareValues("dueDate", "asc")).map(workorder => {
            var createdAtDate = workorder.createdAt.toDate();
            var createdAtMoment = moment(createdAtDate).format(
              "M.DD.YY [at] h:mm A"
            );
            var dueOnDate = workorder.dueDate.toDate();
            var dueOnMoment = moment(dueOnDate).format("M.DD.YY [at] h:mm A");

            return (
              <Page
                key={workorder.id}
                size="A4"
                orientation="landscape"
                style={styles.page}
              >
                <View style={styles.header}>
                  {/* <Image src="http://localhost:3000/android-chrome-192x192.png" /> */}
                  <Text>Work Order Detail</Text>
                  <Text>#{workorder.id}</Text>
                </View>
                <View style={styles.container}>
                  <Text>{workorder.account}</Text>
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
                      <Text> </Text>
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
                <View>
                  {workorder.items &&
                    workorder.items.map((item, i) => {
                      return (
                        <View style={styles.detailLineItem}>
                          <Text>{item.quantity}</Text>
                          <Text>
                            {item.brand} {item.signTheme}
                          </Text>
                        </View>
                      );
                    })}
                </View>
                <View style={styles.section}>
                  <Text
                    render={({ pageNumber, totalPages }) =>
                      `${pageNumber} / ${totalPages}`
                    }
                    fixed
                  />
                </View>
              </Page>
            );
          })}
      </Document>
      // </PDFViewer>
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
