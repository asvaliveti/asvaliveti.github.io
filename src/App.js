import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Involvements from "./pages/involvements";
import {AppBar, Button, Grid, Typography} from "@mui/material";

function App() {
    const navigate = useNavigate();
    document.body.style = 'background: #171717;';

    const appBarText = {
        fontWeight: 700,
        color: "#EDEDED",
        fontFamily: "Helvetica"
    }

    return (
      <div>
        <AppBar position={"static"} style={{backgroundColor: "#171717"}} elevation={0}>
          <Grid container direction={"row"} justifyContent={"center"} spacing={4}>
            <Grid item>
              <Button onClick={() => navigate('/involvements')}>
                  <Typography sx={appBarText} >
                      Involvements
                  </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={() => navigate('/home')}>
                  <Typography sx={appBarText} >
                      Home
                  </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={() => navigate('/contact')}>
                  <Typography sx={appBarText} >
                      Contact
                  </Typography>
              </Button>
            </Grid>
          </Grid>
        </AppBar>
        <Routes>
          <Route path="/involvements" element={<Involvements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;