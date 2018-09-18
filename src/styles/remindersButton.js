import { createMuiTheme } from "../../node_modules/@material-ui/core";

export default createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {
        backgroundColor: "transparent",
        "&$selected": {
          backgroundColor: "rgba(158, 158, 158, 0.2)"
        }
      }
    },
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "#d50000"
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