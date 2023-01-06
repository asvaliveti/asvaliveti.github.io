import React, {useState} from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';


const styles = {
    textFieldBackground: {
        backgroundColor: "#EDEDED",
        borderRadius: 4,
        color: "#EDEDED",
    },
    buttonStyle: {
        backgroundColor: "#DA0037",
        color: "#EDEDED",
        borderRadius: 10,
    },
    icons: {
        color: "#EDEDED",
    }
}

function Contact() {

    const [messageText, setMessageText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const sendEmail = () => {
        console.log(messageText);
        let link = "mailto:asvaliveti@gmail.com?subject=&body=Email: " + email + " Hello, My name is " + name + ". " + messageText;
        window.location.replace(link);
    }

    const renderTypography = () => {
        return (
            <div>
                <Grid item>
                    <Typography sx={{color: "#EDEDED", fontSize: 30, fontWeight: 700 }}>Connect with me!</Typography>
                    <Typography sx={{color: "#EDEDED", fontSize: 20, fontWeight: 400 }}>
                        To collaborate, discuss, or debate sports
                    </Typography>
                </Grid>
            </div>
        )
    }

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
            <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"} spacing={6} mt={4}>
                { renderTypography() }
                <Grid item sx={{width: "40%"}}>
                    <Grid container direction={"row"} justifyContent={"space-between"}>
                        <Grid item>
                            <TextField
                                id={"Name"}
                                label="Name"
                                variant="outlined"
                                sx={styles.textFieldBackground}
                                fullWidth
                                onChange={e => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id={"Email"}
                                label="Email"
                                variant="outlined"
                                sx={styles.textFieldBackground}
                                fullWidth
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{width: "40%"}}>
                    <TextField
                        label="Message"
                        variant="outlined"
                        sx={styles.textFieldBackground}
                        fullWidth
                        rows={5}
                        multiline
                        onChange={e => setMessageText(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Button sx={styles.buttonStyle} onClick={ () => sendEmail() }>Send</Button>
                </Grid>
                <Grid item>
                    { renderSocials() }
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;