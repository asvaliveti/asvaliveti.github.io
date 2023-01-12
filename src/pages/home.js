import React from "react";
import { Grid, Typography } from "@mui/material";
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow'
import Socials from "../widgets/socials";
import Typewriter from "typewriter-effect";

const styles = {
    titleText: {
        fontSize: 30,
        fontWeight: 400,
        color: "#EDEDED",
        height: "100%"
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 400,
        color: "#EDEDED"
    },
}

function Home() {

    return (
        <div>
            <Grow in={true}>
                <Grid container sx={{height: "100%", width: "100%"}} alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={12} mt={25}>
                        <Typography sx={styles.titleText} align={"center"}>
                            <Typewriter
                                options={{
                                    strings: ['Hello, My name is Anirudh!', "Be sure to reach out!"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt={2}>
                        <Slide direction={"down"} in={true}>
                            <Typography sx={styles.subTitle} align={"center"}>Computer Science student @ UW-Madison</Typography>
                        </Slide>
                    </Grid>
                    <Grid item mt={12}>
                        <Grid container direction={"row"} justifyContent={"center"}>
                            <Socials />
                        </Grid>
                    </Grid>
                </Grid>
            </Grow>
        </div>
    );
}

export default Home;