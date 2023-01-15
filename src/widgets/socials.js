import React from 'react';
import {Grid, Slide} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";

const styles = {
    icons: {
        color: "#EDEDED",
    }
}

function Socials() {
    return (
        <div>
            <Slide direction={"up"} in={true}>
                <Grid container direction={"row"} spacing={1}>
                    <Grid item>
                        <IconButton onClick={() => window.open("https://www.instagram.com/ani_valiveti/")}>
                            <InstagramIcon sx={styles.icons}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.open("https://github.com/asvaliveti")}>
                            <GitHubIcon sx={styles.icons}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/avaliveti")}>
                            <LinkedInIcon sx={styles.icons} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.open("mailto:asvaliveti@gmail.com")}>
                            <EmailIcon sx={styles.icons} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.location.replace("/resume")} >
                            <ArticleIcon sx={styles.icons} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Slide>
        </div>
    );
}

export default Socials;