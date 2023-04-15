import React, {useEffect} from "react";
import {Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Involvements from "./pages/involvements";
import {AppBar, Button, Grid, Typography, BottomNavigation } from "@mui/material";
import Socials from "./widgets/socials";
import Chatbot from './pages/chatbot';

const styles = {
    modal: {
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        width: "40%",
        height: "30%",
        top: "35%",
        left: "30%"
    },
    appBarText: {
        fontWeight: 700,
        color: "#EDEDED",
        fontFamily: "Helvetica"
    },
    bottomNavigation: {
        backgroundColor: "#171717"
    }
}

function App() {
    document.body.style = 'background: #171717;';

    useEffect(() => {
        document.title = "Anirudh Valiveti"
    }, [])

    const navigate = useNavigate();

    return (
      <Grid container sx={{height: "100%"}} direction={"column"}>
          <Grid item>
            <AppBar position={"static"} style={{backgroundColor: "#171717"}} elevation={0}>
              <Grid container direction={"row"} justifyContent={"center"} spacing={4}>
                <Grid item>
                  <Button onClick={() => navigate('/involvements')}>
                      <Typography sx={styles.appBarText} >
                          Involvements
                      </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={() => navigate('/home')}>
                      <Typography sx={styles.appBarText} >
                          Home
                      </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={() => navigate('/contact')}>
                      <Typography sx={styles.appBarText} >
                          Contact
                      </Typography>
                  </Button>
                </Grid>
                <Grid item>
                    <Button onClick={() => navigate('/contact')}>
                        <Typography sx={styles.appBarText} >
                            Contact
                        </Typography>
                    </Button>
                </Grid>
              </Grid>
            </AppBar>
          </Grid>
          <Grid item>
            <Routes>
              <Route path="/involvements" element={<Involvements />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<Home />} />
              <Route path="/AverageWarriorsFan" element={<Chatbot />} />
              <Route path="/" element={<Home />}>
                <Route index element={<Home />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </Grid>
          <Grid item>
              <BottomNavigation sx={styles.bottomNavigation}>
                  <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                      <Grid item>
                          <Socials />
                      </Grid>
                  </Grid>
              </BottomNavigation>
          </Grid>
      </Grid>
  );
}

export default App;