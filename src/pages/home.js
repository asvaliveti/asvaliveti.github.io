import React from "react";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
    icons: {
        color: "#EDEDED",
    }
}

function Home() {

    const renderSocials = () => {
        return (
            <div>
                <Grid container direction={"row"} spacing={1}>
                    <Grid item>
                        <IconButton onClick={() => window.location.replace("https://www.instagram.com/ani_valiveti/")}>
                            <InstagramIcon sx={styles.icons}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.location.replace("https://github.com/asvaliveti")}>
                            <GitHubIcon sx={styles.icons}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.location.replace("https://www.linkedin.com/in/avaliveti")}>
                            <LinkedInIcon sx={styles.icons} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.location.replace("mailto:asvaliveti@gmail.com")}>
                            <EmailIcon sx={styles.icons} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        );
    }

    return (
        <div>
            <Grid container sx={{height: "100%", width: "100%"}} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={12} mt={25}>
                    <Typography sx={styles.titleText} align={"center"}>Hey, I'm Anirudh!</Typography>
                </Grid>
                <Grid item xs={12} mt={2}>
                    <Typography sx={styles.subTitle} align={"center"}>Computer Science student @ UW-Madison</Typography>
                </Grid>
                <Grid item mt={12}>
                    <Grid container direction={"row"} justifyContent={"center"}>
                        { renderSocials() }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;