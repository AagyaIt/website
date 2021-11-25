import React, { Component } from 'react';
import './Body.css'
import {Grid, Paper, Typography} from "@mui/material"
import BodyIntro from './components/BodyIntro';
import SeperatorLine from './components/SeperatorLine';
import ServicesMain from './components/ServicesMain';
import Footer from './components/Footer';
import { Divider } from '@mui/material';

class Body extends Component {
    render() {
        return (
            <Paper elevation={0}>
                <Grid container spacing={5}> 
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}>
                        <SeperatorLine />
                    </Grid>
                    <Grid item xs={12}> {/*heading*/}
                            <Typography 
                                variant='h2' 
                                align='center' 
                            > 
                            Welcome to Aagya IT Services
                            </Typography>
                    </Grid>
                    <Grid item xs={12}> {/*Body Intro*/}
                        <BodyIntro/>             
                    </Grid>
                    <Grid item xs={12}> {/*Services*/}
                        <ServicesMain />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default Body;