import React from "react";
import {Button, Grid, Box, Card, CardContent, Typography} from "@mui/material";
import Grow from '@mui/material/Grow';

const styles = {
    cardRoot: {
        backgroundColor: "#EDEDED",
        borderRadius: 2,
        overflowY: "auto"
    },
    titleText: {
        fontWeight: 700,
        fontSize: 20,
    },
    bodyText: {
        fontWeight: 400,
        fontSize: 15,
    },
    buttonStyle: {
        backgroundColor: "#DA0037",
        color: "#EDEDED",
        borderRadius: 2,
    },
}

function Involvements() {
    const renderCard = (imgUrl, title, body, linkUrl, hasLearnMore) => {
        return (
            <div>
                <Card sx={styles.cardRoot}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <CardContent>
                                <Box
                                    component="img"
                                    src={imgUrl}
                                    sx={{width: "90%"}}
                                    mx={"5%"}
                                />
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Typography sx={styles.titleText}>{title}</Typography>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Typography sx={styles.bodyText}>{body}</Typography>
                            </CardContent>
                        </Grid>
                        <Grid item mx={2} my={2}>
                            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                                {linkUrl ?
                                    <Grid item>
                                        <CardContent>
                                            <Button sx={styles.buttonStyle} href={linkUrl}>Visit {title}</Button>
                                        </CardContent>
                                    </Grid> : <div></div>
                                }
                                {hasLearnMore ?
                                    <Grid item>
                                        <Button>Learn More</Button>
                                    </Grid> :
                                    <Grid item>
                                        <Button disabled>Learn More</Button>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }

    return (
        <div>
            <Grid container direction={"row"} spacing={2} alignItems={"stretch"} mx={4} my={4}>
                <Grow in={true}>
                    <Grid item xs={3.75}>
                        {
                            renderCard(
                                "https://uploads-ssl.webflow.com/627ab31fc99a5eeafb7ccb03/62fad55f31855f517066582b_create-new-tag-laptop.png",
                                "LifeTagger Inc.",
                                "Throughout my 3+ years at the company, I worked on refurbishing the app design to modernize app theme, " +
                                "gathering API data to display COVID-19 statistics through the Community Page," +
                                "incorporating emergency resources for Hurricane Ida victims including options for users to donate to survivors, and" +
                                "optimizing development efficiency by incorporating the use of Flutter and React into iOS, Android, and Web interfaces. Recently, my work" +
                                "has shifted more towards incorporating the use of company sold NFC tags into mobile and web platforms both on the front and back end.",
                                "https://www.lifetaggerapp.com/"
                            )
                        }
                    </Grid>
                </Grow>
                <Grow in={true}>
                    <Grid item xs={3.75}>
                        {
                            renderCard(
                                "https://wa.wisc.edu/wp-content/uploads/2022/03/Screen-Shot-2022-03-08-at-1.39.09-PM.png",
                                "Wisconsin Autonomous",
                                "As a part of the AutoDrive Challenge Series II developing a level 4 autonomous vehicle, Wisocnsin Autonomous is focussed on converting a standart Chevy Bolt EUV into" +
                                "a fully autonomous vehicle capable of avoiding obstaclees. At my short time so far, I implemented ROS2 into autonomous vehicle structure to integrate components through the vehicle, ensuring that path" +
                                "planning and rerouting can be done at will. Additionally, I developed high-level and low-level path planning and path following algorithms and implemented them into a Chevrolet Bolt EUV.",
                                "https://wa.wisc.edu/"
                            )
                        }
                    </Grid>
                </Grow>
                <Grow in={true}>
                    <Grid item xs={3.75}>
                        {
                            renderCard(
                                "https://www.lcps.org/cms/lib/VA01000195/Centricity/Domain/29793/IMG_8010.JPG",
                                "RoboLoCo",
                                "Although I wasn't able to join the team until my last year of high-school, I became a part of the leadership team as the co-lead in a software role." +
                                "What began by just recruiting and mentoring 80+ new students in the off-season, grew into competing at a high level in the chesapeake district " +
                                "of the FIRST Robotics Competition (FRC). Throughout the phase of the competitions, RoboLoCo was able to win the Engineering Inspiration award at the 2022" +
                                "district championships qualifying us for the world championship in Houston, TX.",
                                "https://www.lcps.org/Domain/29793",
                            )
                        }
                    </Grid>
                </Grow>
                <Grow in={true}>
                    <Grid item xs={3.75}>
                        {
                            renderCard(
                                "https://phoenix4533.org/images/phoenix-logo.jpg",
                                "Wando Advanced Robotics (Phoenix)",
                                "Coming in as a freshman in high school, I joined this FIRST Robotics Competition (FRC) team looking to learn. Quickly, as I learned more, I supervised the development of " +
                                "vision software, mobile scouting apps, and electrical boards for competitions and ded the development of competition-ready robot code.",
                                "https://phoenix4533.org/index.html"
                            )
                        }
                    </Grid>
                </Grow>
            </Grid>
        </div>
    );
}

export default Involvements;