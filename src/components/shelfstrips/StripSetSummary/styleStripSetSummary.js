const styles = theme => ({
  orderContainer: {
    padding: "20px 26px"
  },
  cardHeader: {
    backgroundColor: "#b1adaa",
    width: "100%"
  },
  orderTitle: {
    marginBottom: "15px",
    color: "rgba(0,0,0,0.87)",
    fontWeight: "500",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  orderLabel: {
    color: "rgba(0,0,0,0.54)",
    lineHeight: "1.5"
  },
  orderInfo: {
    color: "rgba(0,0,0,0.87)",
    fontWeight: "400"
  },
  orderActions: {
    paddingBottom: "40px",
    paddingLeft: "40px",
    padddingRight: "40px",
    textDecoration: "none"
  },
  orderLink: {
    margin: 0
  },
  NavLink: {
    margin: 0
  },
  divider: {
    margin: "15px 0"
  },
  alertText: {
    fontSize: "12px",
    lineHeight: "12px"
  },
  redAlert: {
    color: "white",
    borderRadius: 5,
    fontWeight: "500",
    fontSize: "12px",
    linHeight: "12px",
    backgroundColor: "#d50000",
    padding: "5px 10px",
    marginRight: "10px"
  },
  yellowAlert: {
    color: "white",
    borderRadius: 5,
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "12px",
    backgroundColor: "#e6c60d",
    padding: "6px 10px",
    marginRight: "10px"
  },
  greenAlert: {
    color: "white",
    borderRadius: 5,
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "12px",
    backgroundColor: "#4caf50",
    padding: "6px 10px",
    marginRight: "10px"
  },
  orangeAlert: {
    color: "white",
    borderRadius: 5,
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "12px",
    backgroundColor: "#ff9800",
    padding: "6px 10px",
    marginRight: "10px"
  },
  noAlert: {
    height: "24px",
    width: "1px",
    marginRight: "-1px"
  },
  badgeContainer: {
    display: "flex",
    alignItems: "center"
  },
  badge: {
    top: "50%",
    right: -2,
    fontSize: "12px",
    border: "2px solid white"
  },
  listIcon: {
    color: "rgba(0,0,0,0.5)"
  },
  commentIcon: {
    color: "rgba(0,0,0,0.5)",
    marginRight: "10px"
  },
  fromNowText: {
    color: "rgba(0,0,0,0.87)",
    fontSize: "14px"
  },
  rush: {
    fontSize: "14px",
    fontWeight: "600",
    color: "rgba(0,0,0,0.87)",
    fontStyle: "italic",
    display: "flex",
    alignItems: "center"
  },
  rushIcon: {
    fontSize: "24px",
    marginRight: "5px",
    color: "#d50000"
  },

  orderButton: {
    boxShadow: "none",
    fontSize: "0.75",
    margin: 0,
    textDecoration: "none"
  },
  media: {
    minHeight: "200px",
    objectFit: "cover"
  }
});
export default styles;
