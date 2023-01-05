import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Involvements from "./pages/involvements";
import {AppBar, Button, Grid} from "@mui/material";

function App() {
  const navigate = useNavigate();
  return (
      <div>
        <AppBar position={"static"} >
          <Grid container direction={"row"} justifyContent={"center"}>
            <Grid item>
              <Button onClick={() => navigate('/involvements')} sx={{color: "#FFFFFF"}}>Involvements</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => navigate('/home')} sx={{color: "#FFFFFF"}}>Home</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => navigate('/contact')} sx={{color: "#FFFFFF"}}>Contact</Button>
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