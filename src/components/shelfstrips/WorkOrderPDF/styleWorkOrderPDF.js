import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica"
  },
  header: {
    fontFamily: "Helvetica-Bold",
    fontSize: "15pt",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  container: {
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  accountText: {
    fontFamily: "Helvetica-Bold",
    fontSize: "14pt"
  },
  rushLabel: {
    color: "white"
  },
  rushText: {
    color: "#d50000",
    fontFamily: "Helvetica-Bold"
  },
  detailColumn: {
    fontSize: "10pt"
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#757575",
    marginBottom: 2
  },
  comments: {
    fontSize: "10pt",
    paddingTop: 10,
    flexDirection: "row"
  },
  commentLabel: {
    fontFamily: "Helvetica-Bold",
    paddingRight: 10
  },
  detailValue: {
    paddingLeft: 10,
    color: "#2b2e43"
  },
  itemsWrapper: {
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    flexDirection: "column"
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: "9pt",
    width: "100%"
  },
  itemQ: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14pt",
    padding: 8,
    fontFamily: "Helvetica-Bold"
  },
  itemRow: {
    flexDirection: "row",
    padding: 8,
    borderBottom: "1pt solid #cccccc",
    width: "95%",
    justifyContent: "space-between"
  },
  itemCol: {
    flexDirection: "column",
    justifyContent: "center"
  },
  singleItemRow: {
    flexDirection: "row",
    padding: 8,
    width: "95%",
    justifyContent: "space-between"
  },
  itemText: {
    marginRight: 10
  },
  totalRow: {
    flexDirection: "row",
    padding: 8,
    width: "100%",
    justifyContent: "flex-end"
  },
  totalText: {
    fontSize: "10pt",
    marginRight: 20
  },
  itemPrimary: {
    flexDirection: "row",
    fontSize: "10pt",
    fontFamily: "Helvetica-Bold"
  },
  itemSecondary: {
    flexDirection: "row"
  },
  pageNumber: {
    position: "absolute",
    fontSize: "10pt",
    bottom: 30,
    right: 30,
    color: "grey"
  }
});

export default styles;
