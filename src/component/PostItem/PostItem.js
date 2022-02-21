import React, { Component } from "react";
import "./PostItem.css";

//Material UI imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
            <Button size="small">View</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PostItem;
