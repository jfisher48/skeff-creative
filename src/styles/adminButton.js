import { createMuiTheme } from "@material-ui/core";

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
          backgroundColor: "#9e9e9e",
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
