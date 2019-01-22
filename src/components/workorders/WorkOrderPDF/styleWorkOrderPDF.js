import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30
  },
  header: {
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
  detailColumn: {
    fontSize: 12
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  detailValue: {
    paddingLeft: 10
  },
  detailLineItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: 10
  }
});

export default styles;
