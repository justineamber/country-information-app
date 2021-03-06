import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CountryListComponent from "../countryListComponent/countryListComponent";
import SearchForCountry from "../searchForCountry/searchForCountry";
import Image from "../../../src/static/norway.jpg";
import Unsplash, { toJson } from "unsplash-js";

const useStyles = makeStyles(() => ({
  weatherDashboardWrapper: {
    width: "100%",
    height: "170%",
    backgroundImage: image => `url(${image.url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center fixed"
  },
  topBar: {
    display: "flex",
    position: "relative"
  },
  errorTextStyle: {
    display: "flex",
    justifyContent: "center",
    color: "#e84545",
    fontSize: "1.5rem"
  }
}));

function CountryInformationDashboard({ props }) {
  const [countryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState(countryOption[132]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const [image, setImage] = useState({
    alt: "Norwegian flag",
    url: Image
  });

  const classes = useStyles(image);

  useEffect(() => {
    fetch(
      `https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;population;flag;languages;region`
    )
      .then(response => response.json())
      .then(response => {
        if (!response) return;

        const eightCountryFacts = response.find(
          ({ name }) => name === `${countryName}`
        );
        if (!countryName) {
          return setError("Please select a valid country");
        } else {
          setCountryData(eightCountryFacts);
          return setError("");
        }
      });

    const unsplash = new Unsplash({
      accessKey: `${process.env.REACT_APP_UNSPLASH_API_KEY}`
    });

    if (countryName) {
      unsplash.search
        .photos(countryName, 1, 1)
        .then(toJson)
        .then(json => {
          const results = json.results;
          const imageUrl = results.length > 0 ? results[0].urls.full : Image;

          setImage({
            alt: countryName,
            url: imageUrl
          });
        });
    }
  }, [countryName]);

  return (
    <>
      <Box className={classes.weatherDashboardWrapper}>
        <Box className={classes.topBar}>
          <SearchForCountry
            value={countryName}
            onChange={(event, newValue) => {
              setCountryName(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            countryOption={countryOption}
          />
        </Box>
        {error && <p className={classes.errorTextStyle}>{error}</p>}
        <CountryListComponent data={countryData} />
      </Box>
    </>
  );
}

export default CountryInformationDashboard;

const countryOption = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Virgin Islands (British)",
  "Bulgaria",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cabo Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Cocos (Keeling) Islands",
  "Comoros",
  "Congo",
  "Congo (Democratic Republic of the)",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guinea",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Côte d'Ivoire",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritius",
  "Mexico",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Korea (Democratic People's Republic of)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Réunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Samoa",
  "San Marino",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Viet Nam",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
