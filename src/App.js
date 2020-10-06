import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CountryInformationDashboard from "./components/countryInformationDashboard/countryInformationDashboard";
import "./App.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100vh"
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <CountryInformationDashboard />
      </div>
    </div>
  );
}

export default App;
