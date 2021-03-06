import { Grid } from '@mui/material';
import React, { Component } from 'react';
import ServicesSoftwareDevelopment from './ServicesSoftwareDevelopment';
import ServicesTalentAcquisition from './ServicesTalentAcquisition';
import ServicesSoftwareTraining from './ServicesSoftwareTraining';
import Footer from './Footer';
import NavBar from '../NavBar';

class Services extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={12}>
                        <ServicesSoftwareDevelopment />
                    </Grid>
                    <Grid item xs={12}>
                        <ServicesTalentAcquisition />
                    </Grid>
                    <Grid item xs={12}>
                        <ServicesSoftwareTraining />
                    </Grid>
                </Grid>
               <Footer />
            </div>
        );
    }
}

export default Services;