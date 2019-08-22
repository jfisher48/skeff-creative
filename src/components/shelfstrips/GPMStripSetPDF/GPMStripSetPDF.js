import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Page, Text, View, Document, Font, Image } from "@react-pdf/renderer";
import styles from "./styleGPMStripSetPDF";

export class GPMStripSetPDF extends Component {
  render() {
    //const classes = this.props.classes;
    const { stripset } = this.props;

    const tryRequire = file => {
      try {
        return require("../../../assets/gpm/" + file + ".png");
      } catch (err) {
        return require("../../../assets/gpm/needlogo.png");
      }
    };

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
                console.log(strip.brandId);
                return (
                  <View key={i} style={styles.stripContainer}>
                    <View style={styles.strip}>
                      <View style={styles.top}>
                        <View style={styles.logo}>
                          {strip.brand.length > 0 ? (
                            <Image src={tryRequire(strip.brandId)} />
                          ) : (
                            <Image
                              src={require("../../../assets/gpm/needlogo.png")}
                            />
                          )}
                        </View>
                        {strip.extText && strip.extText.length > 0 ? (
                          <View style={styles.pricingMulti}>
                            <View style={styles.multiRow}>
                              <Text style={styles.extText}>
                                {strip.extText}
                              </Text>
                              <View style={styles.extPrice}>
                                <Text style={styles.dollarSign}>$</Text>
                                <Text>{strip.price}</Text>
                              </View>
                            </View>
                            <View style={styles.singleText}>
                              <Text>
                                {strip.singlePrice && strip.singlePrice > 0
                                  ? "or $" + strip.singlePrice + " each"
                                  : ""}
                              </Text>
                            </View>
                          </View>
                        ) : (
                          <View style={styles.pricing}>
                            <Text style={styles.priceText}>${strip.price}</Text>
                          </View>
                        )}
                      </View>
                      <View style={styles.bottom}>
                        <Text style={styles.brandText}>{strip.brand}</Text>
                        <Text>{strip.package}</Text>
                      </View>
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

Font.register("http://localhost:3000/fonts/arialbd.ttf", {
  family: "Arial-Bold"
});
Font.register("http://localhost:3000/fonts/arial.ttf", { family: "Arial" });

const styledGPMStripSetPDF = withStyles(styles)(GPMStripSetPDF);

export default styledGPMStripSetPDF;
