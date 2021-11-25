import React, { Component } from 'react';
import { Typography, Paper, Grid, Button } from '@mui/material';
import SeperatorLine from './SeperatorLine';
class Footer extends Component {
    render() {
        return (
            <Paper variant="outlined">
                <Grid container>
                    <Grid item xs={4}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant='subtitle2' component='div'>Contact</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='subtitle2'>Aagya IT Services</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption'>First Floor. Plot No. 11</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption'>TIT Colony</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption'>Neemuch, M.P., 458441</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption'>Email: vkilewala@aagya.co.in</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption' component='div'>Phone: +91 8815298475</Typography>
                            </Grid>
                        </Grid>
                    </Grid> {/*Contact Info*/}
                    <Grid item xs={4}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant='subtitle2'>Site Links</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button color="inherit" size="small">Our Story</Button>                            
                            </Grid>
                            <Grid item xs={12}>
                                <Button color="inherit" size="small">Services</Button>                            
                            </Grid>
                            <Grid item xs={12}>
                                <Button color="inherit" size="small">Contact Us</Button>                            
                            </Grid>
                            <Grid item xs={12}>
                                <Button color="inherit" size="small">Privacy policy</Button>                            
                            </Grid>
                        </Grid>
                    </Grid> {/*Site links*/}
                    <Grid item xs={4}>
                            <iframe 
                            title="Aagya IT Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.871228800939!2d74.86501424940997!3d24.466640214711347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966730fd96865d7%3A0xfa685f5a6669d36b!2sAagya%20Enterprises!5e0!3m2!1sen!2sin!4v1634897093826!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{border:2}} 
                            allowfullscreen="" 
                            loading="lazy"></iframe>
                    </Grid> {/*Map*/}
                    <Grid item xs={12}>
                        <Typography gutterBottom='true'>     </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Paper variant="outlined">
                        <Typography variant='caption' align='center' component='div'>Designed and Developed by Aagya IT Services | © 2020 Aagya Enterprises</Typography>
                    </Paper>
                    </Grid> {/*Disclaimer*/}
                </Grid>
            </Paper>
        );
    }
}

export default Footer;