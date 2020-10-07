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

  if (data && data.length === 0) return null;

  return (
    <Box className={classes.weatherList}>
      {[data].map(countryDetails => {
        console.log(countryDetails);
        return (
          <CountrySingleComponent
            key={countryDetails.name}
            country={countryDetails.name}
            countryCapital={countryDetails.capital}
            countryPopulation={countryDetails.population}
            countryFlag={countryDetails.flag}
            countryRegion={countryDetails.region}
            countryCurrencies={countryDetails.currencies[0].name}
            countryLanguages={countryDetails.languages[0].nativeName}
            countryBorders={countryDetails.borders}
          />
        );
      })}
    </Box>
  );
}

export default CountryListComponent;
