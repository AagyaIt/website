import React, { Component } from 'react';
import {Button, Grid, Typography, Divider} from '@mui/material'

class ServicesSoftwareTraining extends Component {
    render() {
        return (
            <Grid spacing={3} container justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                   <Divider></Divider>
                </Grid>
                <Grid item xs={12}>
                   <Typography variant="h4" align='center'>Software Engineering Training</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align='center' variant="h5">We are providing students an opportunity to join us for a 3 to 6 months long Industrial training and Software engineering bootcamp focused on increasing employability</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align='center' variant="h6">Only for the curious minds our programs are designed for those who want to make a career in computer science.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align='center' variant="h6">Programming is only one aspect of software engineering we will teach you the complete process of software development starting from Requirements gathering, Data design, Coding, Testing and Deployment</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align='center' variant="h6">Learn about latest trends in Software Engineering and Programming best practices</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Button color="secondary" variant="outlined">Contact us for Available Classes</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                   <Divider></Divider>
                </Grid>
           </Grid>
        );
    }
}

export default ServicesSoftwareTraining;