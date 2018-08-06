import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "#2196f3"
            }}
        },        
        MuiListItem: {
            button: {
        '&:hover': {
            backgroundColor: "#2196f3",
        }}        
        },
        MuiTouchRipple: {            
            ripple: {
                color: 'white'
            }            
        }
    }
});