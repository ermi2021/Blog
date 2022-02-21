import './App.css';
import Navbar from '../Navbar/Navbar';
import PostList from '../PostList/PostList';
import Footer from '../Footer/Footer';
import Sidebar from "../Sidebar/Sidebar";

//material ui imports
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


//redux imports
import { useSelector, useDispatch } from "react-redux";

function App() {

  const sidebar = useSelector((state) => state.sidebar.sideBar);

  return (
    <div className="App" style={{height:"100%"}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
     
        <Grid item xs={12}>
        <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
         <Navbar/>
         </Paper>
        </Grid>
        
        <Grid item xs={12} sx={{flexGrow:1}}>
          <Grid container spacing={2}>
              {sidebar ? (
            <Grid item xs={4}>
              <Paper sx={{ position: "fixed", top: 85, left: 0, width: 440 }}>
                <Sidebar />
              </Paper>
            </Grid>
          ) : (
            <></>
          )}
          <Grid item xs={sidebar ? 8 : 12} sx={{ marginTop: 3 }}>
              <PostList/>
          </Grid>
          </Grid>
         
        </Grid>
        
          <Grid item xs={12}>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <Footer/>
          </Paper>
          </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default App;
