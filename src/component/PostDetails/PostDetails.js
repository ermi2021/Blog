import React, { Component } from "react";
import AddNavbar from "../Navbar/AddNavbar";
import AppBar from "@mui/material/AppBar";

//material ui imports
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { LoremIpsum } from "react-lorem-ipsum";
import Typography from "@mui/material/Typography";


class PostDetails extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
         
            <Grid item xs={12}>
            <Paper
            sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
            elevation={3}
          >
              <AppBar position="static">
                <AddNavbar />
              </AppBar>
              </Paper>
            </Grid>
         
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              marginTop: "5%",
              marginLeft: "25%",
              marginRight: "25%",
              marginBottom:'12%'
            }}
          >
            <Typography
              variant="h2"
              component="div"
              sx={{ flexGrow: 0.5, textAlign: "justify" }}
            >
              Post Title
            </Typography>
            <LoremIpsum p={5} />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default PostDetails;
