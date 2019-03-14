import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleWorkOrderReports";
import Button from "@material-ui/core/Button";
import DownloadIcon from "@material-ui/icons/SaveAlt";
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
                variant="contained"
                size="large"
                color="secondary"
              >
                <DownloadIcon style={{ marginRight: "8px" }} />
                PDF
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
