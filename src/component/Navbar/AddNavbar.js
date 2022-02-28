import React, { Component } from "react";

//Material UI imports
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CancelIcon from '@mui/icons-material/Cancel';

//route imports
import { useLocation } from "react-router-dom";
import { Outlet, Link, NavLink } from "react-router-dom";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { changeSidebar } from "../../features/sidebarSlice";

function AddNavbar() {
  const location = useLocation();
  console.log(location.pathname);

  const dispatch = useDispatch();

  const sidebar = useSelector((state) => state.sidebar.sideBar);

  return (
    <div>
      <Toolbar sx={{ flexGrow: 1 }}>
      <NavLink to={`/`} style={{color:"white"}}>
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
      </NavLink>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
          Add
        </Typography>
        <div style={{ flexGrow: 0.7 }}></div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="contained" aria-label="contained button group">
            <Button color="info" startIcon={<CancelIcon />}>Cancel</Button>
            <Button color="success" startIcon={<FlightTakeoffIcon />}>Post</Button>
          </ButtonGroup>
        </Box>
      </Toolbar>
    </div>
  );
}

export default AddNavbar;
