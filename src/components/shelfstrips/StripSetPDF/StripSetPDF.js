import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Page,
  Text,
  View,
  Document,
  Font,
  //PDFViewer,
  Image
} from "@react-pdf/renderer";
import stripTest from "../../../data/stripTest";
//import { connect } from "react-redux";
//import { firestoreConnect } from "react-redux-firebase";
//import { compose } from "recompose";
import styles from "./styleStripSetPDF";
//import moment from "moment";

export class StripSetPDF extends Component {
  render() {
    //const classes = this.props.classes;
    const { stripset } = this.props;
    console.log(stripset);
    return (
      // <PDFViewer width="100%" height="800">

      <Document>
        <Page
          key={stripset.id}
          size="letter"
          orientation="landscape"
          style={styles.page}
        >
          <View style={styles.header} fixed>
            <Text
              style={{
                position: "absolute",
                top: "-18pt",
                paddingLeft: "25pt"
              }}
            >
              {stripset.account +
                " - " +
                stripset.requesterFirstName +
                " " +
                stripset.requesterLastName +
                " - Printed " +
                new Date().toDateString()}
            </Text>
          </View>
          <View style={styles.body}>
            {stripset &&
              stripset.strips.map(strip => {
                return (
                  <View key={strip.id} style={styles.stripContainer}>
                    <View style={styles.strip}>
                      <View style={styles.logo}>
                        {strip.brand.length > 0 ? (
                          <Image
                            src={require("../../../assets/" +
                              strip.brandId +
                              ".jpg")}
                          />
                        ) : (
                          <Image
                            src={require("../../../assets/needlogo.jpg")}
                          />
                        )}
                      </View>

                      {strip.multi && strip.multi.length > 0 ? (
                        <View
                          style={
                            !strip.yellow
                              ? styles.stripText
                              : styles.stripTextYellow
                          }
                        >
                          <Text
                            style={{
                              fontSize: "15pt",
                              position: "absolute",
                              top: "4%"
                            }}
                          >
                            {strip.multi}
                          </Text>
                          <Text
                            style={{
                              position: "absolute",
                              top: "15%",
                              fontSize: "36pt"
                            }}
                          >
                            {strip.price}
                          </Text>
                          <Text
                            style={{
                              position: "absolute",
                              bottom: "6%",
                              fontSize: "12pt",
                              textTransform: "uppercase",
                              flexWrap: "nowrap"
                            }}
                          >
                            {strip.package}
                          </Text>
                        </View>
                      ) : (
                        <View
                          style={
                            !strip.yellow
                              ? styles.stripText
                              : styles.stripTextYellow
                          }
                        >
                          <Text
                            style={{
                              position: "absolute",
                              top: "6%",
                              fontSize: "36pt"
                            }}
                          >
                            ${strip.price}
                          </Text>
                          <Text
                            style={{
                              position: "absolute",
                              bottom: "14%",
                              fontSize: "12pt",
                              textTransform: "uppercase"
                            }}
                          >
                            {strip.package}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                );
              })}
            {/* <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo}>
                  <Image src={require("../../../assets/budweiser.jpg")} />
                </View>
                <View style={styles.stripText}>
                  <Text
                    style={{
                      fontSize: "15pt",
                      position: "absolute",
                      top: "4%"
                    }}
                  >
                    2 for
                  </Text>
                  <Text
                    style={{
                      position: "absolute",
                      top: "15%",
                      fontSize: "36pt"
                    }}
                  >
                    $4.00
                  </Text>
                  <Text
                    style={{
                      position: "absolute",
                      bottom: "6%",
                      fontSize: "12pt",
                      textTransform: "uppercase",
                      flexWrap: "nowrap"
                    }}
                  >
                    25oz Cans
                  </Text>
                </View>
              </View>
            </View> */}
          </View>

          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `Page ${pageNumber} of ${totalPages}`
            }
            fixed
          />
        </Page>
      </Document>
      // </PDFViewer>
    );
  }
}

Font.register(
  "https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN8rsOUuhs.ttf",
  { family: "OpenSans" }
);

const styledStripSetPDF = withStyles(styles)(StripSetPDF);

export default styledStripSetPDF;
