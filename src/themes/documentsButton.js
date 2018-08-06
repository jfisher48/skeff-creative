import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "#ac9e61"
            }}
        },        
        MuiListItem: {
            button: {
        '&:hover': {
            backgroundColor: "#ac9e61",
        }}        
    }}
});