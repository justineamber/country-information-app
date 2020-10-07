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
    height: "100%",
    backgroundImage: image => `url(${image.url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  topBar: {
    display: "flex",
    position: "relative"
  }
}));

function CountryInformationDashboard({ props }) {
  const [countryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState(countryOption[142]);
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState({
    alt: "Norwegian flag",
    url: Image
  });

  const classes = useStyles(image);

  useEffect(() => {
    fetch(
      `https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;borders;population;flag;languages;region`
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (!response || !response.data) return;
        const eightCountryFacts = response
          .find(response => response.name === "norway")
          .map(response => {
            return {
              countryFlag: response.flag,
              country: response.name,
              countryCapital: response.capital,
              countryPopulation: response.population,
              countryRegion: response.region,
              countryCurrencies: response.currencies,
              countryLanguages: response.languages,
              countryBorders: response.borders
            };
          });

        setCountryData(eightCountryFacts);
        console.log(eightCountryFacts);
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
  "Bolivia",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Virgin Islands (British)",
  "Virgin Islands (U.S)",
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
  "Christmas Islands",
  "Cocos (Keeling) Islands",
  "Columbia",
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
  "Falkland Islands",
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
  "Holy Sea",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Côte d'Ivoire",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Isreal",
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
  "Macao",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritius",
  "Mexico",
  "Moldova",
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
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Phillippines",
  "Poland",
  "Portugal",
  "Peurto Rico",
  "Qatar",
  "Réunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Samoa",
  "San Marino",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slocakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Korea(Republic of)",
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
  "Tanzania",
  "Thialand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turks and Ciacos Islands",
  "Tulvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
