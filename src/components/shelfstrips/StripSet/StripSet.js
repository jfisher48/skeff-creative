import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleStripSet";
import Button from "@material-ui/core/Button";
import DownloadIcon from "@material-ui/icons/SaveAlt";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { StripSetPDF } from "../StripSetPDF/StripSetPDF";

class StripSet extends Component {
  render() {
    const classes = this.props.classes;
    const { stripset } = this.props;
    return (
      <div>
        <PDFDownloadLink
          document={<StripSetPDF stripset={stripset} />}
          fileName={stripset.account}
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
                Download PDF
              </Button>
            )
          }
        </PDFDownloadLink>
      </div>
    );
  }
}

const styledStripSet = withStyles(styles)(StripSet);

export default styledStripSet;
