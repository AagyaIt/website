import React, { Component } from 'react';
import { Typography, Grid, Divider } from '@mui/material';
import {Link as RLink} from 'react-router-dom';
import {Link as MLink} from '@mui/material'
import { ContactInfo } from './Contact';

class Footer extends Component {    
    render() {
        return (
                <Grid container justifyContent="right" alignItems="center">
                    <Grid item xs={4}>
                        <ContactInfo />   
                    </Grid> {/*Contact Info*/}
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant='subtitle2'>Site Links</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/">Home</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/Story">Our Story</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/Services">Services</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/Contact">Contact Us</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/PrivacyPolicy">Privacy Policy</Typography>
                            </Grid>
                            <Grid item xs={12}>
                            <MLink
                                variant="caption"
                                href="http://www.aagyaenterprises.com"
                                color="secondary"
                            >
                                Aagya Enterprises
                            </MLink> 
                            </Grid>
                        </Grid>
                    </Grid> {/*Site links*/}
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant='subtitle2'>Cool Things:</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/">Augmented Reality</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/Story">Hack-a-day</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/Services">Instructables</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/Contact">3D Printing</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component={RLink} color="secondary" to="/PrivacyPolicy">Virtual Reality</Typography>
                            </Grid>
                            <Grid item xs={12}>
                            <MLink
                                variant="caption"
                                href="http://www.aagyaenterprises.com"
                                color="secondary"
                            >
                                Aagya Enterprises
                            </MLink> 
                            </Grid>
                        </Grid>
                    </Grid> {/*Site links*/}
                    
                    <Grid item xs={12}>
                        <Typography gutterBottom='true'>     </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                        <Typography variant='caption' align='center' component='div'>Designed and Developed by Aagya IT Services | © 2020 Aagya Enterprises</Typography>
                    </Grid> {/*Disclaimer*/}
                </Grid>
        );
    }
}

export default Footer;