import React, { Component } from 'react';
import { Grid, Card, Link, Typography, CardActionArea, CardContent, Button } from '@mui/material';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import { SchoolTwoTone } from '@mui/icons-material';

class ServicesMain extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={4}> {/*outsourcing*/}
                    <Card align='center' variant="outlined">
                            <CardContent>
                            <CardActionArea>
                            <BusinessTwoToneIcon color="secondary" sx={{fontSize:100}} />
                                <Typography variant="h6" color="secondary">Software Consultancy</Typography>
                                <Typography paragraph align="justify">
                                    We have a team of Rockstar software professionals with hands-on experience in a multitude of technologies. Our resources are ready to be deployed immediately so you can setup your technological infrastructure at lightning speed.
                                </Typography>
                                </CardActionArea>
                            </CardContent>
                        <Button color="secondary" component={Link} to="/Contact">
                                Know more
                        </Button>
                    </Card>
                </Grid>
                <Grid item xs={4}> {/*Talent Acquisition*/}
                    <Card align='center' variant="outlined">
                        <CardContent>
                            <CardActionArea>
                                <WorkTwoToneIcon color="secondary" sx={{fontSize:100}} />
                                <Typography color="secondary" variant="h6">Talent Acquisition</Typography>
                                <Typography paragraph align="justify">
                                    We offer multiple plans which are suitable wether you are a start-up looking for adding new people to your team or a big corporation looking for bulk hiring. All our candidates are pre-screened for technical competency so that your recruitment process is quick and efficient. 
                                </Typography>
                            </CardActionArea>
                        </CardContent>
                        <Button color="secondary">
                            See Plans
                        </Button>
                    </Card>
                </Grid>
                <Grid item xs={4}> {/*training*/}
                    <Card align='center' variant="outlined">
                        <CardContent>
                            <CardActionArea>
                                <SchoolTwoTone color="secondary" sx={{fontSize:100}} />
                                <Typography color="secondary" variant="h6">Software Engineering Training</Typography>
                                <Typography paragraph align="justify">
                                    We offer industrial training services are focused on increasing employability. Our batches are small and our training method is unique. We have multiple programs suitable for schoolers as well as college undergrads. Contact us for current batches
                                </Typography>
                            </CardActionArea>
                        </CardContent>
                        <Button color="secondary">
                            Lookup Classes
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default ServicesMain;