import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
function App() {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  const searchLowCase = search.toLowerCase();

  const countries = country.filter((country) =>
    country.name.common.toLowerCase().includes(searchLowCase)
  );

  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "100px", bgcolor: "#FAFAFA" }}
      >
        <TextField
          id="search_bar"
          sx={{ width: "350px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          label="Search for a country..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        >
          <SearchIcon />
        </TextField>
        <Autocomplete
          id="combobox_region"
          options={regions}
          sx={{ width: "250px" }}
          renderInput={(params) => (
            <TextField {...params} label="Filter by Region" />
          )}
          onInput={(e) => onRegionPicker(e.target.value)}
        />
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: "30px", bgcolor: "#FAFAFA" }}
      >
        {countries.map((countries) => (
          <Grid item>
            <Card
              sx={{
                width: 415,
                height: 415,
                maxWidth: 345,
                my: "40px",
                margin: "35px",
              }}
            >
              <CardActionArea key={countries.name}>
                <Link to={`/${countries.name.common}`}>
                  <CardMedia
                    component="img"
                    height="200"
                    width="200"
                    image={countries.flags.png}
                  />
                </Link>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    <></> {countries.name.common}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <>Population: </> {countries.population}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <>Region: </>
                    {countries.region}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <>Capital: </>
                    {countries.capital}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
export default App;
