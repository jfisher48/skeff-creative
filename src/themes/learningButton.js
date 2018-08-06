import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "#009688"
            }}
        },        
        MuiListItem: {
            button: {
        '&:hover': {
            backgroundColor: "#009688",
        }}        
    }}
});