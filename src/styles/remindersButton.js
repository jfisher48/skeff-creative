import { createMuiTheme } from "../../node_modules/@material-ui/core";

export default createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {
        backgroundColor: "transparent",
        "&$selected": {
          backgroundColor: "rgba(158, 158, 158, 0.2)",
          "&:hover": {
            "& svg": {
              color: "#7b7f91"
            }
          }
        }
      }
    },
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "#d50000",
          "& svg": {
            color: "rgba(255,255,255, 0.50)"
          }
        }
      }
    },
    MuiTouchRipple: {
      ripple: {
        color: "white"
      }
    }
  }
});
