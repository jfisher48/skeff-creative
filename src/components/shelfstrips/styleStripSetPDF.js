import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingVertical: "36pt",
    margin: 0,
    fontFamily: "Helvetica",
    alignItems: "center"
  },
  header: {
    horizontalPadding: "20pt",
    fontFamily: "Helvetica",
    textAlign: "left",
    fontSize: "12pt",
    width: "100%"
    //height: "36pt"
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
    //maxHeight: "540pt"
  },
  stripContainer: {
    width: "263.52pt",
    height: "90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    //backgroundColor: "blue"
  },
  strip: {
    width: "216pt",
    height: "72pt",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
    //backgroundColor:"yellow",
  },
  logo: {
    width: "90pt",
    height: "72pt",
    backgroundColor: "grey"
  },
  stripText: {
    width: "126pt",
    height: "72pt",
    display: "flex",
    position: "relative",
    padding: 0,
    margin: 0,
    alignItems: "center",
    flexDirection: "column"
  },
  specText: {
    fontSize: "15pt",
    position: "absolute",
    fontFamily: "OpenSans",
    top: "5%",
    lineHeight: "0",
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  priceText: {
    position: "absolute",
    top: "17%",
    fontSize: "36pt",
    fontFamily: "OpenSans",
    justifyContent: "center"
  },
  pkgText: {
    position: "absolute",
    bottom: "5%",
    fontSize: "12pt",
    fontFamily: "OpenSans"
  },
  pageNumber: {
    //width: "95%",
    //height: "18pt",
    //paddingTop: "10pt",
    fontSize: "8pt",
    position: "absolute",
    bottom: "18pt"
    //textAlign: "right"
  }
});

export default styles;
