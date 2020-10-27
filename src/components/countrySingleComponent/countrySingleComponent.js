import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  countrySingleContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "flex-start"
  },
  countryPropertySingle: {
    color: "#eeeeea",
    fontFamily: "Inconsolata, monospace",
    fontSize: "1rem",
    padding: "0.5rem"
  },
  countryFactsSingle: {
    color: "#fff",
    fontSize: "1.5rem",
    padding: "0.5rem"
  },
  countryMapSingle: {
    padding: "0.5rem",
    width: "7rem",
    height: "7rem"
  },
  horizontalLine: {
    marginTop: "0.5px",
    marginLeft: "0.5rem",
    height: "0.5px",
    borderTop: 0,
    background: "#eaeaea",
    paddingRight: "100%"
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
    countryLanguages
  } = props;

  return (
    <Box className={classes.countrySingleContainer}>
      <img
        className={classes.countryMapSingle}
        src={countryFlag}
        alt="country flag"
      />

      <Typography variant="h5" className={classes.countryPropertySingle}>
        Country
      </Typography>
      <Typography variant="h5" className={classes.countryFactsSingle}>
        {country}
      </Typography>
      <hr className={classes.horizontalLine} />

      <Typography variant="h5" className={classes.countryPropertySingle}>
        Population
      </Typography>
      <Typography variant="h5" className={classes.countryFactsSingle}>
        {countryPopulation}
      </Typography>
      <hr className={classes.horizontalLine} />

      <Typography variant="h5" className={classes.countryPropertySingle}>
        Capital city
      </Typography>
      <Typography variant="h5" className={classes.countryFactsSingle}>
        {countryCapital}
      </Typography>
      <hr className={classes.horizontalLine} />

      <Typography variant="h5" className={classes.countryPropertySingle}>
        Region
      </Typography>
      <Typography variant="h5" className={classes.countryFactsSingle}>
        {countryRegion}
      </Typography>
      <hr className={classes.horizontalLine} />

      <Typography variant="h5" className={classes.countryPropertySingle}>
        Currencies
      </Typography>
      <Typography variant="h5" className={classes.countryFactsSingle}>
        {countryCurrencies}
      </Typography>
      <hr className={classes.horizontalLine} />

      <Typography variant="h5" className={classes.countryPropertySingle}>
        Languages
      </Typography>
      <Typography variant="h5" className={classes.countryFactsSingle}>
        {countryLanguages}
      </Typography>
      <hr className={classes.horizontalLine} />
    </Box>
  );
}

export default CountrySingleComponent;
