import React from 'react';
import {Grid, Typography} from "@mui/material";

const styles = {
    headerText: {
        color: "#EDEDED",
        fontSize: 30,
        fontWeight: 700
    },
}

function ResumeViewer() {

    return (
        <Grid container direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
                <Typography sx={styles.headerText}>
                    My Resume
                </Typography>
            </Grid>
            <Grid item>
                <iframe
                    height={1200}
                    width={1000}
                    src="https://docs.google.com/document/d/1UOoBqENOhzxYrm_QKV5PEWb0nB9pD8nKEnBde5UK5ag/edit?usp=sharing"
                    />
            </Grid>
        </Grid>
    );
}

export default ResumeViewer;