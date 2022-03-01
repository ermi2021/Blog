import React, { Component, use } from "react";
import Navbar from "../Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import "./NewPost.css";
import CatagorySelection from "./CatagorySelection";

//material ui imports
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";
//content editable
import ContentEditable from "react-contenteditable";


//route imports
import { useLocation } from "react-router-dom";
import { Outlet, Link, NavLink } from "react-router-dom";
import sanitizeHtml from "sanitize-html";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = ["Fiction", "Philosophy", "My Point of Views", "From Books"];

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      postContent: `<p></p>`,
      editable: true,
      references: [],
      postTitle: "",
    };
  }

  handleSelection = (event) => {
    const {
      target: { value },
    } = event;

    this.setState({
      references: typeof value === "string" ? value.split(",") : value,
    });
  };

  handleChange = (evt) => {
    this.setState({ postContent: evt.target.value });
    console.log(this.state.postContent);
  };
 
  titleChange = (evt) => {
    this.setState({ postTitle: evt.target.value });
  };

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "img"],
    allowedAttributes: {
      a: ["href"],
      img: ["src", "width", "height"],
      "*": ["text-align", "center"],
    },
  };

  sanitize = () => {
    this.setState({ postContent: sanitizeHtml(this.state.postContent, this.sanitizeConf) });
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
            <Grid item xs={12} sx={{display:"flex" , flexDirection:"column"}}>
              <Grid container spacing={2} sx={{marginTop:"1%"}}>
                <Grid item xs={12} md={5} lg={4}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "left", paddingTop: 3, ml: 4 }}
                  >
                    Post Options
                  </Typography>
                  <FormControl sx={{ width: 300, ml: 4 }}>
                    
                    <Select
                      labelId="contained-multiple-checkbox-label"
                      id="contained-multiple-checkbox"
                      multiple
                      value={this.state.references}
                      onChange={this.handleSelection}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {categories.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            checked={this.state.references.indexOf(name) > -1}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "left", paddingTop: 3, ml: 4 }}
                  >
                    References
                  </Typography>
                  <TextField
                    id="contained-multiline-static"
                  
                    multiline
                    rows={4}
                    sx={{ width: 300, ml: 4}}
                  />
                    
                </Grid>
                <Divider orientation="vertical" flexItem sx={{width:"10px"}} />
                <Grid item xs={12} md={6} lg={7} sx={{ml:4}}>
               
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
                    value={this.state.postTitle}
                    onChange={this.titleChange}
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
                      {this.state.editable ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </Stack>
                  <ContentEditable
                    style={{
                      minHeight: "200px",
                      maxHeight: "200px",
                      maxWidth: "77%",
                      border: ".5px solid #bdbdbd",
                      borderRadius: "0.9px",
                      padding: "10px",
                      background: "#f6f6f6",
                      fontFamily: "Arial",
                      overflowX:"hidden"
                    }}
                    className="editable"
                    tagName="pre"
                    html={this.state.postContent} // innerpostContent of the editable div
                    disabled={!this.state.editable} // use true to disable edition
                    onChange={this.handleChange} // handle innerpostContent change
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
