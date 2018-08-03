import { createMuiTheme } from '../../node_modules/@material-ui/core';

export default createMuiTheme({
    overrides: {        
        MuiListItem: {
            button: {
        '&:hover': {
            backgroundColor: "#ff5722",
        }}        
    }}
});