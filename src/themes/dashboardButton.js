import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({    
    
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "#9e9e9e"
            }}
        },     
        MuiListItem: {            
            button: {                
        '&:hover': {
            backgroundColor: "#9e9e9e",
                },             
            }        
        },
        MuiTouchRipple: {            
            ripple: {
                color: 'white'
            }            
          },
    }
});