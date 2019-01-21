import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import styles from "./styleWorkOrderPDF";

export class WorkOrderPDF extends Component {
  render() {
    const classes = this.props.classes;
    const { workorders, auth, profile } = this.props;
    console.log(workorders);
    return (
      <PDFViewer width="100%" height="800">
        <Document>
          {workorders &&
            workorders.sort(compareValues("dueDate", "asc")).map(workorder => {
              return (
                <Page size="A4" orientation="landscape" style={styles.body}>
                  <View style={styles.header}>
                    <Text>Work Order Detail</Text>
                  </View>
                  <View style={styles.container}>
                    <Text>{workorder.account}</Text>
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
      </PDFViewer>
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
