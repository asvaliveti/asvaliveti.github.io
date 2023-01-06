import React from "react";
import { Box, Typography } from "@mui/material";

function Home() {
    const titleText = {
        fontSize: 30,
        fontWeight: 700,
        color: "#EDEDED",
        height: "100%"
    };

    return (
        <div>
            <Box container alignItems={"center"} justifyContent={"center"}>
                <Typography sx={titleText} alignItems={"center"} justifyContent={"center"}>Hey, I'm Anirudh!</Typography>
            </Box>
        </div>
    );
}

export default Home;