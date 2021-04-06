import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Notes from './pages/Notes'
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import FormPage from "./pages/FormPage"
import Layout from "./components/Layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import LanguageExample from "./pages/LanguageExample";

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: "#fefefe",
    // },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/form">
              <FormPage />
            </Route>
            <Route path="/multilanguage">
              <LanguageExample />
            </Route> 
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
