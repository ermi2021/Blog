import React, { Component } from "react";
import "./PostList.css";
import PostItem from "../PostItem/PostItem";


//Material UI imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";

//redux imports
import { useSelector, useDispatch } from "react-redux";


function PostList() {
  const sidebar = useSelector((state) => state.sidebar.sideBar);
  return (
    <div>
      <Box sx={{ flexGrow: 1, paddingRight: 3,paddingLeft: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ marginTop: 3 }}>
            <Typography gutterBottom variant="b1" component="div" sx={{marginTop:2}}>
              Recent Posts
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: 20, marginTop:3 }}>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
              <Grid item xs={sidebar ? 4 : 3}>
                <PostItem />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default PostList;
