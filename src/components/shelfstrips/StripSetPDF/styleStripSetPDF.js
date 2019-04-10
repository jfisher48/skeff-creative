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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  logo: {
    width: "90pt",
    height: "72pt"
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
