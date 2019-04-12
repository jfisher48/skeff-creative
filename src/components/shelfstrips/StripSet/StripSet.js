import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleStripSet";
import Button from "@material-ui/core/Button";
import DownloadIcon from "@material-ui/icons/SaveAlt";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { StripSetPDF } from "../StripSetPDF/StripSetPDF";

class StripSet extends Component {
  state = {
    pdf: "false"
  };

  handleExport = () => {
    this.setState({ pdf: true });
  };
  render() {
    const classes = this.props.classes;
    const stripset = this.props.stripset;
    const date = new Date();
    console.log(this.state);
    return (
      <div>
        {this.state.pdf == true ? (
          <PDFDownloadLink
            document={<StripSetPDF stripset={stripset} />}
            fileName={(
              stripset.account +
              "_" +
              date.getMonth() +
              "_" +
              date.getDate() +
              "_" +
              date.getFullYear()
            )
              .toLowerCase()
              .replace(/\W/g, "")}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                "Loading..."
              ) : (
                <Button
                  className={classes.downloadButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  <DownloadIcon />
                  DOWNLOAD
                </Button>
              )
            }
          </PDFDownloadLink>
        ) : (
          <Button onClick={this.handleExport}>EXPORT PDF</Button>
        )}
      </div>
    );
  }
}

const styledStripSet = withStyles(styles)(StripSet);

export default styledStripSet;
