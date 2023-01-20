import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow'
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";


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

    useEffect(() => {
        document.title = "Home | Anirudh Valiveti"
    }, [])

    const stringSplitter = string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
    };

    return (
        <div>
            <Grow in={true}>
                <Grid container sx={{height: "100%", width: "100%"}} alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={12} mt={25}>
                        <Typography sx={styles.titleText} align={"center"}>
                            <Typewriter
                                options={{
                                    strings: ['Hello, My name is Anirudh!👋',
                                        "Born in India🇮🇳, but lived in Germany🇩🇪, Russia🇷🇺, Ukraine🇺🇦, and the US🇺🇸",
                                        "Be sure to reach out!"],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 15,
                                    pauseFor: 1500,
                                    stringSplitter
                                }}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt={2}>
                        <Slide direction={"down"} in={true}>
                            <Typography sx={styles.subTitle} align={"center"}>Computer Science student @ UW-Madison</Typography>
                        </Slide>
                    </Grid>
                </Grid>
            </Grow>
        </div>
    );
}

export default Home;