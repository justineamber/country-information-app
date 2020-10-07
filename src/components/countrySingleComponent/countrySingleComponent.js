import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  // weatherSingleContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  //   alignContent: "center",
  //   alignItems: "center"
  // },
  // titleSingle: {
  //   fontSize: "1.25rem",
  //   fontWeight: 500,
  //   padding: "1rem"
  // },
  weatherSingle: {
    padding: "1rem",
    width: "5rem",
    height: "5rem",
    viewBox: "0 0 80 80"
  }
}));

function CountrySingleComponent(props) {
  const classes = useStyles();
  const {
    countryFlag,
    country,
    countryPopulation,
    countryCapital,
    countryRegion,
    countryCurrencies,
    countryLanguages,
    countryBorders
  } = props;

  return (
    <Box className={classes.weatherSingleContainer}>
      <img
        className={classes.weatherSingle}
        src={countryFlag}
        alt="country flag"
      />

      <Typography variant="h5" className={classes.titleSingle}>
        {country}
      </Typography>

      <Typography variant="h5" className={classes.titleSingle}>
        {countryPopulation}
      </Typography>

      <Typography variant="h5" className={classes.titleSingle}>
        {countryCapital}
      </Typography>

      <Typography variant="h5" className={classes.titleSingle}>
        {countryRegion}
      </Typography>

      <Typography variant="h5" className={classes.titleSingle}>
        {countryCurrencies}
      </Typography>

      <Typography variant="h5" className={classes.titleSingle}>
        {countryLanguages}
      </Typography>

      <Typography variant="h5" className={classes.titleSingle}>
        {countryBorders}
      </Typography>
    </Box>
  );
}

export default CountrySingleComponent;
