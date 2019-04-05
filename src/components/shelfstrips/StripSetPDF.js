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
//import { connect } from "react-redux";
//import { firestoreConnect } from "react-redux-firebase";
//import { compose } from "recompose";
import styles from "./styleStripSetPDF";
//import moment from "moment";

export class StripSetPDF extends Component {
  render() {
    //const classes = this.props.classes;
    //const { workorders } = this.props;
    //console.log(workorders);
    return (
      // <PDFViewer width="100%" height="800">

      <Document>
        <Page
          //key={workorder.id}
          size="letter"
          orientation="landscape"
          style={styles.page}
        >
          <View style={styles.header} fixed>
            {/* <Image src="http://localhost:3000/android-chrome-192x192.png" /> */}
            <Text
              style={{
                position: "absolute",
                top: "-18pt",
                paddingLeft: "18pt"
              }}
            >
              Casey's Buyno
            </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo}>
                  <Image src="https://admin.skeffcreative.com/wp-content/uploads/2019/04/budlight.jpg" />
                </View>
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
            <View style={styles.stripContainer}>
              <View style={styles.strip}>
                <View style={styles.logo} />
                <View style={styles.stripText}>
                  <Text style={styles.specText}>2 for</Text>

                  <Text style={styles.priceText}>$7.29</Text>

                  <Text style={styles.pkgText}>6 PK CANS</Text>
                </View>
              </View>
            </View>
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
