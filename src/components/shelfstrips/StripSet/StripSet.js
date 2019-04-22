import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleStripSet";
import Button from "@material-ui/core/Button";
//import DownloadIcon from "@material-ui/icons/SaveAlt";
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
      <div
      // style={{
      //   display: "flex",
      //   height: "100%",
      //   alignItems: "center",
      //   justifyContent: "center"
      // }}
      >
        {this.state.pdf === true ? (
          <PDFDownloadLink
            document={<StripSetPDF stripset={stripset} />}
            fileName={(
              stripset.account +
              stripset.description +
              "_" +
              (date.getMonth() + 1) +
              "_" +
              date.getDate() +
              "_" +
              date.getFullYear()
            )
              .toLowerCase()
              .replace(/\W/g, "")}
            style={{
              padding: 0,
              margin: 0,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <div
                  style={{
                    padding: "8px 4px",
                    margin: 0,
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  Loading...
                </div>
              ) : (
                <Button
                  className={classes.downloadButton}
                  //variant="contained"
                  //size="large"
                  color="secondary"
                >
                  {/* <DownloadIcon /> */}
                  DOWNLOAD
                </Button>
              )
            }
          </PDFDownloadLink>
        ) : (
          <Button
            className={classes.downloadButton}
            onClick={this.handleExport}
          >
            CREATE PDF
          </Button>
        )}
      </div>
    );
  }
}

const styledStripSet = withStyles(styles)(StripSet);

export default styledStripSet;
