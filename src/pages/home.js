import React from "react";
import {AppBar, Button, Grid, Typography} from "@mui/material";

function Home() {
    const titleText = {
        fontSize: 30,
        fontWeight: 700,
        color: "#EDEDED",
        height: "100%"
    };

    return (
        <div>
            <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{height: "100%"}}>
                <Grid item xs={12}>
                    <Typography sx={titleText}>Hey, I'm Anirudh!</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;