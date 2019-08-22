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
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  },
  stripContainer: {
    width: "263.52pt",
    height: "90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  strip: {
    width: "216pt",
    height: "72pt",
    display: "block",
    fontFamily: "Arial-Bold"
    //alignItems: "center",
    //justifyContent: "center",
    //flexDirection: "column"
  },
  top: {
    height: "38pt",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  logo: {
    width: "90pt",
    height: "38pt"
  },
  pricing: {
    width: "90pt",
    height: "38pt",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "yellow"
  },
  pricingMulti: {
    width: "90pt",
    height: "38pt",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "yellow"
  },
  multiRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18pt"
  },
  extText: {
    padding: "0 2pt"
  },
  extPrice: {
    padding: "0 2pt",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  dollarSign: {
    fontSize: "10pt",
    alignSelf: "flex-start",
    marginTop: "2pt"
  },
  priceText: {
    fontSize: "23pt"
  },
  singleText: {
    fontSize: "8pt",
    fontFamily: "Arial"
  },
  bottom: {
    height: "38pt",
    fontFamily: "Arial-Bold",
    fontSize: "14pt"
  },
  brandText: {
    marginTop: "2pt"
  },
  stripText: {
    width: "126pt",
    height: "72pt",
    display: "flex",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "OpenSans"
  },
  stripTextYellow: {
    width: "126pt",
    height: "72pt",
    display: "flex",
    position: "relative",
    backgroundColor: "yellow",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "OpenSans"
  },
  pageNumber: {
    fontSize: "8pt",
    position: "absolute",
    bottom: "18pt"
  }
});

export default styles;
