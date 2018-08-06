import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "#673ab7"
            }}
        },        
        MuiListItem: {
            button: {
        '&:hover': {
            backgroundColor: "#673ab7",
        }}        
        },
        MuiTouchRipple: {            
            ripple: {
                color: 'white'
            }            
        }
    }
});