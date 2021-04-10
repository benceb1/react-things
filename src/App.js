import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Notes from './pages/Notes'
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import FormPage from "./pages/FormPage";
import Layout from "./components/Layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import LanguageExample from "./pages/LanguageExample";
import FirebaseAuthHome from "./pages/FirebaseAuthHome";
import { Signup } from "./pages/Signup";
import useNotes from "./hooks/useNotes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
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
  const { notes, addNote, deleteNote } = useNotes();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes notes={notes} deleteNote={deleteNote} />
            </Route>
            <Route path="/create">
              <Create addNote={addNote} />
            </Route>
            <Route path="/form">
              <FormPage />
            </Route>
            <Route path="/multilanguage">
              <LanguageExample />
            </Route>
            <Route path="/firebase">
              <FirebaseAuthHome />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
