import React, {useState} from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import Socials from "../widgets/socials";


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
                    <Socials />
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;