import React, { Component, use } from "react";
import Navbar from "../Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import "./NewPost.css";

//material ui imports
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import AddLinkIcon from "@mui/icons-material/AddLink";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//content editable
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
      editable: true,
    };
  }
  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
    console.log(this.state.html);
  };

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "img"],
    allowedAttributes: { a: ["href"], img: ["src", "width", "height"], '*':["text-align", "center"] },
  };

  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
  };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  //   const { Fiction, Philosophy, po, fb } = state;
  //   const error = [Fiction, Philosophy, po, fb].filter((v) => v).length !== 1;
  render = () => {
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
                  {/* <FormControl
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
                          checked={po}
                          onChange={handleChange}
                          name="po"
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
               
                </FormControl> */}
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
                  <Stack direction="row" spacing={1}>
                    <EditButton cmd="italic" name="FormatItalicIcon" />
                    <EditButton cmd="bold" name="FormatBoldIcon" />
                    <EditButton cmd="formatBlock" arg="h1" name="h1" />
                    <EditButton
                      cmd="createLink"
                      arg="https://github.com/lovasoa/react-contenteditable"
                      name="AddLinkIcon"
                    />
                    <EditButton
                      cmd="insertImage"
                      arg="https://th.bing.com/th/id/OIP.yKilr6Y32L4j5E4QB0SxKgHaFj?pid=ImgDet&rs=1, 4%, 50%"
                      name="InsertPhotoIcon"
                    />
                    <EditButton
                      cmd="justifyCenter"
                      name="FormatAlignCenterIcon"
                    />
                    <EditButton cmd="justifyLeft" name="FormatAlignLeftIcon" />
                    <EditButton
                      cmd="justifyRight"
                      name="FormatAlignRightIcon"
                    />
                   <IconButton onClick={this.toggleEditable}>
                      {this.state.editable ? <VisibilityOffIcon/> :  <VisibilityIcon/>}
                    </IconButton>
                  </Stack>
                  <ContentEditable
                    style={{
                      minHeight: "200px",
                      maxWidth: "77%",
                      border: ".5px solid #bdbdbd",
                      borderRadius: "0.9px",
                      padding: "10px",
                      background:"#f6f6f6",
                      fontFamily:"Arial",
                    }}
                    className="editable"
                    tagName="pre"
                    html={this.state.html} // innerHTML of the editable div
                    disabled={!this.state.editable} // use true to disable edition
                    onChange={this.handleChange} // handle innerHTML change
                    onBlur={this.sanitize}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  };
}

function EditButton(props) {
  if (props.name == "FormatItalicIcon") {
    return (
      <IconButton
        key={props.cmd}
        onMouseDown={(evt) => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        <FormatItalicIcon />
      </IconButton>
    );
  }

  if (props.name == "FormatBoldIcon") {
    return (
      <IconButton
        key={props.cmd}
        onMouseDown={(evt) => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        <FormatBoldIcon />
      </IconButton>
    );
  }

  if (props.name == "AddLinkIcon") {
    return (
      <IconButton
        key={props.cmd}
        onMouseDown={(evt) => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        <AddLinkIcon />
      </IconButton>
    );
  }

  if (props.name == "InsertPhotoIcon") {
    return (
      <IconButton
        key={props.cmd}
        onMouseDown={(evt) => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        <InsertPhotoIcon />
      </IconButton>
    );
  }

  if (props.name == "FormatAlignCenterIcon") {
    return (
      <IconButton
        key={props.cmd}
        onMouseDown={(evt) => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        <FormatAlignCenterIcon />
      </IconButton>
    );
  }

  if (props.name == "FormatAlignLeftIcon") {
    return (
      <IconButton
        key={props.cmd}
        onMouseDown={(evt) => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        <FormatAlignLeftIcon />
      </IconButton>
    );
  }

  if (props.name == "FormatAlignRightIcon") {
    return (
      <IconButton
        key={props.cmd}
        onMouseDown={(evt) => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        <FormatAlignRightIcon />
      </IconButton>
    );
  }

  if (props.name == "h1") {
    <IconButton
      key={props.cmd}
      onMouseDown={(evt) => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      <FormatAlignRightIcon />
    </IconButton>;
  }
  return null;
}

export default NewPost;
