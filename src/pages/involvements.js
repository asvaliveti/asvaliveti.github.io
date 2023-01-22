import React, {useEffect} from "react";
import {Button, Grid, Box, Card, CardContent, Typography} from "@mui/material";
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import { isBrowser } from 'react-device-detect';
const data = require("../involvementsData/data.json");

const styles = {
    cardRoot: {
        backgroundColor: "#EDEDED",
        borderRadius: 2,
        overflow: "auto",
        maxHeight: "100%",
        height: "100%"
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
        '&:hover': {
            backgroundColor: '#DA0037',
            color: '#EDEDED',
        },
    },
    headerText: {
        color: "#EDEDED",
        fontSize: 30,
        fontWeight: 700
    },
}


function Involvements() {
    useEffect(() => {
        document.title = "Involvements | Anirudh Valiveti"
    }, [])

    const renderTitle = () => {
        return (
            <Grow in={true}>
                <Slide direction={"down"} in={true}>
                    <Typography sx={styles.headerText}>Projects I've Worked on</Typography>
                </Slide>
            </Grow>
        );
    }

    const renderCard = (title, body, imgUrl, linkUrl, hasLearnMore) => {
        return (
            <Card sx={styles.cardRoot}>
                <Grid container direction={"column"} sx={{display: "flex"}}>
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
                    <Grid item mx={2} my={2} justifyContent={"flex-end"}>
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
        );
    }

    return (
        <div>
            <Grid container direction={"column"} spacing={2} alignItems={"center"} my={2}>
                <Grid item>
                    { renderTitle() }
                </Grid>
                <Grid item>
                    {isBrowser ?
                        <Grid container direction={"row"} spacing={2} mx={4} sx={{maxHeight: "100%", height: "100%"}}>
                            {
                                data.involvements.map((involvement) => {
                                    return (
                                        <Grow in={true}>
                                            <Grid item xs={3.75}>
                                                {renderCard(involvement.title, involvement.body, involvement.imgUrl, involvement.linkUrl)}
                                            </Grid>
                                        </Grow>
                                    )
                                })
                            }
                        </Grid> :
                        <Grid container direction={"row"} spacing={2} sx={{maxHeight: "100%", height: "100%"}}>
                            {
                                data.involvements.map((involvement) => {
                                    return (
                                        <Grow in={true}>
                                            <Grid item xs={12}>
                                                {renderCard(involvement.title, involvement.body, involvement.imgUrl, involvement.linkUrl)}
                                            </Grid>
                                        </Grow>
                                    )
                                })
                            }
                        </Grid>
                    }
                </Grid>
            </Grid>
        </div>
    );
}

export default Involvements;