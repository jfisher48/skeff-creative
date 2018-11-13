const styles = theme => ({
  header: {
    backgroundColor: "#e7e7e7",
    width: "100%"
  },
  headerContainer: {
    padding: "16px 26px",
    overflow: "hidden"
  },
  orderNumber: {
    float: "left",
    fontWeight: "500",
    color: "#707070"
  },
  dueDate: {
    float: "right",
    color: "#707070"
  },
  dueDateUrgent: {
    float: "right",
    color: "#fff",
    backgroundColor: "#e1313c",
    padding: "5px 7px",
    borderRadius: "4px"
  },
  leftIcon: {
    lineHeight: "20px",
    fontSize: "18px",
    fontWeight: "700",
    float: "left",
    marginRight: "5px",
    marginTop: "1px",
    textAlign: "center",
    verticalAlign: "middle"
  },
  dueDateText: {
    color: "inherit",
    float: "right",
    fontSize: "0.95rem",
    fontWeight: "500",
    lineHeight: "20px"
  }
});

export default styles;
