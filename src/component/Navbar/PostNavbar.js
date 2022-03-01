import React, { Component } from "react";
import SearchBar from "../Searchbar/SearchBar";
//Material UI imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//route imports
import { useLocation } from "react-router-dom";
import { Outlet, Link, NavLink } from "react-router-dom";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { changeSidebar } from "../../features/sidebarSlice";

function PostNavbar() {
  const location = useLocation();
  console.log(location.pathname);

  const dispatch = useDispatch();

  const sidebar = useSelector((state) => state.sidebar.sideBar);

  return (
    <div>
      <Toolbar sx={{ flexGrow: 1 }}>
     
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            Post Title
          </Typography>
        <NavLink to={`/add`} style={{color:"white", textDecoration:"none"}}>
          <Button
            sx={{ marginLeft: 5, flexGrow: 0.2 }}
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
          >
            Edit
          </Button>
        </NavLink>
      </Toolbar>
    </div>
  );
}

export default PostNavbar;
