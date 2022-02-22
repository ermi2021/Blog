import React, { Component, useEffect } from "react";
import "./Navbar.css";
import SearchBar from "../Searchbar/SearchBar";
import HomeNavbar from "./HomeNavbar";
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
import AddNavbar from "./AddNavbar";

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
       
             {location.pathname == '/add' ? (
              <AddNavbar/>
             ) : (
               <HomeNavbar/>
             )}
          
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
