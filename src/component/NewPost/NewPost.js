import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

//material ui imports
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

function NewPost() {

    const [state, setState] = React.useState({
        Fiction:false,
        Philosophy:false,
        pov:false,
        fb:false,
      });
    
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const { Fiction, Philosophy, pov, fb } = state;
      const error = [Fiction, Philosophy, pov, fb].filter((v) => v).length !== 1;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel component="legend">
                   Category
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Fiction}
                          onChange={handleChange}
                          name="Fiction"
                        />
                      }
                      label="Fiction"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Philosophy}
                          onChange={handleChange}
                          name="Philosophy"
                        />
                      }
                      label="Philosophy"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={pov}
                          onChange={handleChange}
                          name="pov"
                        />
                      }
                      label="My Point of View"
                    />
                     <FormControlLabel
                      control={
                        <Checkbox
                          checked={fb}
                          onChange={handleChange}
                          name="fb"
                        />
                      }
                      label="From Books"
                    />
                  </FormGroup>
               
                </FormControl>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ paddingTop: 3 }}
                >
                  Post Title
                </Typography>
                <TextField
                  sx={{ width: "80%", background: "#f6f6f6" }}
                  fullWidth
                  id="fullWidth"
                />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ marginTop: 2 }}
                >
                  Post Content
                </Typography>
                <TextField
                  sx={{ width: "80%", background: "#f6f6f6" }}
                  id="filled-multiline-static"
                  multiline
                  rows={15}
                  variant="filled"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default NewPost;
