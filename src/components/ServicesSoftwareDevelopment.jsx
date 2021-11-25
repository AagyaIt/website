import { Divider, Typography , Grid, Button, Card, CardActionArea, CardMedia} from '@mui/material';
import React, { Component } from 'react';
import onsite from "../res/onsite.png"
import remote from "../res/remote.png"
import corp from "../res/c2c.png"
import SeperatorLine from './SeperatorLine';

class ServicesSoftwareDevelopment extends Component {
    render() {
        return (
            <Grid spacing={5} container>
            <Grid item xs={12}>
                
            </Grid>
            <Grid item xs={12}>
                <SeperatorLine />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Typography align="center" variant="h4">Software Development Services</Typography>
            </Grid>
            <Grid item xs={12}>
                    <Typography variant="h5" align="center" gutterBottom="true">
                        Custom software development solutions for Corporations Big and Small
                    </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid Item xs={4}>
                        <Card variant="outlined">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={onsite}
                                    alt="On-Site Software Consultancy"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                image={remote}
                                alt="Remote Software Consultancy"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                image={corp}
                                alt="Vendor partnering"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Button color="secondary" variant="outlined">Submit your requirements</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        );
    }
}

export default ServicesSoftwareDevelopment;