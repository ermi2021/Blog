import React, { Component, useEffect } from "react";
import "./Navbar.css";
import SearchBar from "../Searchbar/SearchBar";

//material-ui imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { changeSidebar } from "../../features/sidebarSlice";

//route imports
import { useLocation } from "react-router-dom";
import { Outlet, Link, NavLink } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log(location.pathname);

  const dispatch = useDispatch();

  const sidebar = useSelector((state) => state.sidebar.sideBar);

  useEffect(() => {
    console.log(sidebar);
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ flexGrow: 1 }}>
            {location.pathname == "/add" ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => dispatch(changeSidebar())}
              >
                <ArrowBackIcon />
              </IconButton>
            ) : (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => dispatch(changeSidebar())}
              >
                {sidebar == true ? <ArrowBackIcon /> : <MenuIcon />}
              </IconButton>
            )}
            {location.pathname == "/add" ? (
              <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                Add
              </Typography>
            ) : (
              <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                Project
              </Typography>
            )}
            {location.pathname == "/add" ? (
              <div style={{ flexGrow: 0.7 }}></div>
            ) : (
              <div style={{ flexGrow: 0.7 }}>
                <SearchBar />
              </div>
            )}
        <NavLink   
            to={`/add`}
         
          >
              <Button
                sx={{ marginLeft: 5, flexGrow: 0.2 }}
                variant="contained"
                color="success"
                startIcon={<AddIcon />}
              >
                   
                    Write
                  
              </Button>
          </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
