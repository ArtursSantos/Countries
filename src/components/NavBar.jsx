import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const NavBar = function ButtonAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: "#FAFAFA" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "1%", color: "rgb(23, 19, 17)" }}
          >
            Where in the World?
          </Typography>
          <IconButton>
            <DarkModeIcon />
            Dark Mode
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
