const styles = theme => ({
  widgetHeader: {
    padding: "16px 26px",
    lineHeight: "33.06px",
    backgroundColor: "rgba(229,239,247,1)"
  },
  widgetContent: {
    padding: "24px 26px"
  },
  widgetTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    lineHeight: "33.06px",
    color: "#4e5262"
  },
  tagChip: {
    backgroundColor: "rgb(0, 145, 234)",
    margin: "0 4px 4px 0",
    borderRadius: "4px",
    fontSize: "11px",
    fontWeight: "700",
    color: "white",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#0064b7"
    }
  }
});

export default styles;
