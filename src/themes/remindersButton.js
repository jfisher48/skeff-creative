import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "#d50000"
            }}
        },        
        MuiListItem: {
            button: {
        '&:hover': {
            backgroundColor: "#d50000",
        }}        
    }}
});