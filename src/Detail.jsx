import * as React from "react";
import NavBar from "./components/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Typography, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function Detail() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  const countrySelect = country.map((country) => {
    return (
      <>
        <Grid container sx={{ marginTop: "100px" }}>
          <Grid item xs={12} md={6} sx={{ marginLeft: "50px" }}>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image={country.flags.svg}
              sx={{
                width: 615,
                height: 415,
                maxWidth: 545,
                margin: "30px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <Typography variant="h4" gutterBottom>
              {country.name.common}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Native Name: </strong>
              {Object.values(country.name.nativeName)[0].common}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Population: </strong>
              {country.population}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Region: </strong>
              {country.region}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Sub Region: </strong>
              {country.subregion}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Capital: </strong>
              {country.capital}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Top Level Domain: </strong>
              {country.tld.join(", ")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Currencies: </strong>
              {Object.values(country.currencies)[0].name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Languages: </strong>
              {Object.values(country.languages).join(", ")}
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  });

  return (
    <>
      <Grid container>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item sx={{ margintTop: "100px" }}>
          <Link to={`/`}>
            <Button
              variant="outlined"
              sx={{
                color: "rgb(17, 21, 23)",
                borderColor: "rgb(17, 21, 23)",
                marginTop: "70px",
                "&:hover": {
                  borderColor: "rgb(49, 52, 68)",
                  color: "rgb(49, 52, 68)",
                },
              }}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        {countrySelect}
      </Grid>
    </>
  );
}

export default Detail;
