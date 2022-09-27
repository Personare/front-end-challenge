import GlobalStyle from "./GlobalStyles/GlobalStyles";
import Router from "./Routes/Router";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "./colors/theme";
function App() {
    return (
        <>
            <GlobalStyle />
            <MuiThemeProvider theme={theme}>
                <Router />
            </MuiThemeProvider>
        </>
    );
}

export default App;
