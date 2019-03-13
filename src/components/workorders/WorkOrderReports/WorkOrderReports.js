import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleWorkOrderReports";
import Button from "@material-ui/core/Button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { WorkOrderPDF } from "../WorkOrderPDF/WorkOrderPDF.js";

class WorkOrderReports extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div>
        <PDFDownloadLink
          document={<WorkOrderPDF workorders={this.props.workorders} />}
          fileName="Work Order Details.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button
                className={classes.downloadButton}
                variant="outlined"
                size="large"
                color="secondary"
              >
                {this.props.reportName}
              </Button>
            )
          }
        </PDFDownloadLink>
      </div>
    );
  }
}

const styledWorkOrderReports = withStyles(styles)(WorkOrderReports);

export default styledWorkOrderReports;
