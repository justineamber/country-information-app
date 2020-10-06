import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(() => ({
  autoCompleteWrapper: {
    marginTop: "1rem",
    marginLeft: "1rem"
  },
  inputBackgroundColor: {
    backgroundColor: "#fff"
  }
}));

function SearchForCountry(props) {
  const {
    countryName,
    onChange,
    inputValue,
    onInputChange,
    countryOption
  } = props;

  const classes = useStyles();

  return (
    <>
      <Box className={classes.autoCompleteWrapper}>
        <Autocomplete
          value={countryName}
          onChange={onChange}
          inputValue={inputValue}
          onInputChange={onInputChange}
          id="Search city"
          options={countryOption}
          style={{ width: 200 }}
          renderInput={params => (
            <TextField
              {...params}
              label="Search country"
              variant="filled"
              className={classes.inputBackgroundColor}
            />
          )}
        />
      </Box>
    </>
  );
}

export default SearchForCountry;
