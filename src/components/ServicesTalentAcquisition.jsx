import { Typography , Grid, Card, Divider, CardActionArea, List, ListItem, Button} from '@mui/material';
import React, { Component } from 'react';

class ServicesTalentAcquisition extends Component {
    render() {
        return (
            <Grid spacing={3} container justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center" variant="h4">Talent Acquisition Services</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5' align='center'>Start Building your team today. We are currently offering three plans</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={4}>
                            <Card variant="outlined">
                                <CardActionArea>
                                    <Typography color="secondary" align='center' variant="h6">Basic</Typography>
                                    <Divider/>
                                    <Typography align='center' variant="subtitle2">Get Access to relevant resources with a pay-per-hire rate</Typography>
                                        <List>
                                            <ListItem>
                                                <Typography variant="subtitle2"> - Access to our resource pool</Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="subtitle2"> - Only 3% comission per candidate </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="subtitle2"> - Complimentary resume services</Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="subtitle2"> - Schedule upto 2 interviews per week</Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="h6"> Price : Free</Typography>
                                            </ListItem>
                                        </List>                           
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={4}>
                            <Card variant="outlined">
                                <CardActionArea>
                                    <Typography color="secondary" align='center' variant="h6">Plus</Typography>
                                    <Divider/>
                                    <Typography align='center' variant="subtitle2">Grow your team with unlimited tech hiring for a fixed price</Typography>
                                    <List>
                                            <ListItem>
                                                <Typography variant="subtitle2"> - Upto 2 Requirements per week</Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="subtitle2"> - Custom search per requirement</Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="subtitle2"> - Min. 2 and Max. 5 profiles per week</Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="subtitle2"> - Scheduing and Resume services</Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="h6">Price : 2000/- per week</Typography>
                                            </ListItem>
                                        </List>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={4}>
                            <Card variant="outlined">
                                <CardActionArea>
                                    <Typography color="secondary" align='center' variant="h6">Premium</Typography>
                                    <Divider/>
                                    <Typography align='center' variant="subtitle2">Get all the feature of plus plan and much more</Typography>
                                    <List>
                                        <ListItem>
                                            <Typography variant="subtitle2"> - Pre-Evaluated profiles</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="subtitle2"> - Proctored coding tests</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="subtitle2"> - Min. 5 and Max. 10 profiles per week</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="subtitle2"> - Interview scheduling services</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography align='center' variant="h6">Price : Contact Us</Typography>
                                        </ListItem>
                                    </List>
                                </CardActionArea>
                            </Card>
                        </Grid>
                
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <Button color="secondary" variant="outlined">Subscribe</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default ServicesTalentAcquisition;