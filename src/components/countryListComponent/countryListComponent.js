import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import CountrySingleComponent from "../countrySingleComponent/countrySingleComponent";

const useStyles = makeStyles(theme => ({
  weatherList: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
    padding: "1.5rem 0",
    marginTop: theme.spacing(4),
    overflowX: "auto",
    width: "100%"
  }
}));

function CountryListComponent(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <Box className={classes.weatherList}>
      {data.map(countryDetails => (
        <CountrySingleComponent
          countryFlag={countryDetails.countryFlag}
          key={countryDetails.country}
          country={countryDetails.country}
          countryCapital={countryDetails.countryCapital}
          countryPopulation={countryDetails.countryPopulation}
          countryRegion={countryDetails.countryRegion}
          countryCurrencies={countryDetails.countryCurrencies}
          countryLanguages={countryDetails.countryLanguages}
          countryBorders={countryDetails.countryBorders}
        />
      ))}
    </Box>
  );
}

export default CountryListComponent;
