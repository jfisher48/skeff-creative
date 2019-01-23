import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica"
  },
  header: {
    fontFamily: "Helvetica-Bold",
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
    fontFamily: "Helvetica-Bold"
  },
  rushLabel: {
    color: "white"
  },
  rushText: {
    color: "#d50000",
    fontFamily: "Helvetica-Bold"
  },
  detailColumn: {
    fontSize: 12
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#757575",
    marginBottom: 2
  },
  comments: {
    fontSize: 12,
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
    fontSize: 12,
    width: "100%"
  },
  itemQ: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    padding: 8,
    fontFamily: "Helvetica-Bold"
  },
  itemCol: {
    flexDirection: "column",
    padding: 8,
    borderBottom: "1pt solid #cccccc",
    width: "95%"
  },
  singleItemCol: {
    flexDirection: "column",
    padding: 8,
    width: "95%"
  },
  itemText: {
    marginRight: 10
  },
  itemPrimary: {
    flexDirection: "row",
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  },
  itemSecondary: {
    flexDirection: "row"
  },
  pageNumber: {
    position: "absolute",
    fontSize: 10,
    bottom: 30,
    right: 30,
    color: "grey"
  }
});

export default styles;
