import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "#e91e63"
            }
        }
        },        
        MuiListItem: {
            button: {
        '&:hover': {
            backgroundColor: "#e91e63",
        }}        
        },
        MuiTouchRipple: {            
            ripple: {
                color: 'white'
            }            
        }
    }
});