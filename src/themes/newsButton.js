import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "#4caf50"
            }}
        },        
        MuiListItem: {
            button: {
        '&:hover': {
            backgroundColor: "#4caf50",
        }}        
        },
        MuiTouchRipple: {            
            ripple: {
                color: 'white'
            }            
        },
    }
});