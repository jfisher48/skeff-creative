import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: "transparent",
                '&$selected': {
                backgroundColor: "#ff5722"
            }}
        },        
        MuiListItem: {
            button: {
        '&:hover': {
            backgroundColor: "#ff5722",
        }}        
    }}
});