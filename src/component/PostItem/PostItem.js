import React, { Component } from "react";
import "./PostItem.css";

//Material UI imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


//route imports
import { useLocation } from "react-router-dom";
import { Outlet, Link, NavLink } from "react-router-dom";

class PostItem extends Component {
  render() {
    return (
      <div>
        <Card sx={{ maxWidth: 345 }} elevation={9}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some Demo of the content
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to={'/post'}>
            <Button fullWidth size="large">Got To Post</Button>
            </NavLink>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PostItem;
