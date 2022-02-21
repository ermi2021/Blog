import React, { Component } from 'react';
import  "./Sidebar.css";

//Material UI imports
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Typography } from '@mui/material';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            open:true
        };
        this.handleClick=this.handleClick.bind(this);
    }

  handleClick = () => {
      console.log("handle click");
    this.setState({open:!this.state.open});
  };
    render() {
        return (
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#f6f6f6', paddingLeft:2 }} elevation={20}>
            <nav aria-label="main mailbox folders">
              <List sx={{ width: '100%', maxWidth: 360,height:'100%',bgcolor: '#f6f6f6' }}>
               <Typography gutterBottom variant="h6" component="div">
                  Catagories
               </Typography>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* <InboxIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary="Fiction" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* <DraftsIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary="Philosophy" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* <DraftsIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary="My Point of Views" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* <DraftsIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary="From Books" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* <DraftsIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary="" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        );
    }
}

export default Sidebar;