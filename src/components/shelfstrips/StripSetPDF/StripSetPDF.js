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

    var expandedStrips = [];

    stripset.strips.forEach(strip => {
      for (var i = 0; i < strip.quantity; i++) expandedStrips.push(strip);
    });
    console.log(expandedStrips);
    console.log(stripset);
    return (
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
                " " +
                stripset.description +
                " - " +
                stripset.requesterFirstName +
                " " +
                stripset.requesterLastName +
                " - Printed " +
                new Date().toDateString()}
            </Text>
          </View>
          <View style={styles.body}>
            {expandedStrips &&
              expandedStrips.map((strip, i) => {
                return (
                  <View key={i} style={styles.stripContainer}>
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

                      {strip.extText && strip.extText.length > 0 ? (
                        <View
                          style={
                            !strip.isYellow
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
                            {strip.extText}
                          </Text>
                          <Text
                            style={{
                              position: "absolute",
                              top: "15%",
                              fontSize: "36pt"
                            }}
                          >
                            ${strip.price}
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
                            !strip.isYellow
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
    );
  }
}

Font.register(
  "https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN8rsOUuhs.ttf",
  { family: "OpenSans" }
);

const styledStripSetPDF = withStyles(styles)(StripSetPDF);

export default styledStripSetPDF;
