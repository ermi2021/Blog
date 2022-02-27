import React, { Component } from 'react';

//Material UI imports
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
class CatagorySelection extends Component {

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

export default CatagorySelection;