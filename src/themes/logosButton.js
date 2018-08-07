import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "rgba(158, 158, 158, 0.2)"
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