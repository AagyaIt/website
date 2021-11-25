import { Checkbox, FormControlLabel, FormGroup, Button, Grid, TextField, Typography } from '@mui/material';
import React, { Component } from 'react';
import Footer from './Footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <Grid container alignItems="center" justifyContent="center" spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center">Contact Us</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center">Fill out the form below and Our team will reach out to you within 24 hours</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <form>
                            <Grid container alignItems="center" justifyContent="center" spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth color="secondary" required id="outlined-required" label="Name" defaultValue=""/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth color="secondary" required id="outlined-required" label='Email' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth color="secondary" id="outlined-basic" label='Phone Number' />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox color="secondary" />} label="Software Consultancy">
                                        </FormControlLabel>
                                        <FormControlLabel control={<Checkbox color="secondary" />} label="Talent Acquisition">
                                        </FormControlLabel>
                                        <FormControlLabel control={<Checkbox color="secondary" />} label="Software Training">
                                        </FormControlLabel>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth color="secondary" multiline minRows="3"  id="outlined-basic" label='Description' />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" color="secondary"> Submit </Button>
                                </Grid>
                                <Grid item xs={12}>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item xs={6}>
                            <iframe 
                            title="Aagya IT Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.871228800939!2d74.86501424940997!3d24.466640214711347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966730fd96865d7%3A0xfa685f5a6669d36b!2sAagya%20Enterprises!5e0!3m2!1sen!2sin!4v1634897093826!5m2!1sen!2sin" 
                            width="100%" 
                            height="525px" 
                            style={{border:2}} 
                            allowfullscreen="true" 
                            loading="lazy"></iframe>
                    </Grid> {/*Map*/}
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default Contact;