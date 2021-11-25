import { Grid, Link, Typography } from '@mui/material';
import React, { Component } from 'react';
import Footer from './Footer';
import SeperatorLine from './SeperatorLine';

class Story extends Component {
    render() {
        return (
                <Grid container spacing={5}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={4}>
                <SeperatorLine />
                <SeperatorLine />
                <SeperatorLine />
                <SeperatorLine />
                <SeperatorLine />
                <SeperatorLine />
                <SeperatorLine />
                <SeperatorLine />
                </Grid>
                <Grid item xs={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h2" color="secondary">
                            {`{(0)}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography display="inline" variant="h6" align="justify">Established in 2020 </Typography>
                        <Typography display="inline" variant="h6" color="secondary" align="justify">
                        "Aagya" (spelled as aA-G-NYah or Ājña or आज्ञा ) IT Services {' '}
                        </Typography>
                        <Typography display="inline" variant="h6" align="justify">
                        aims at providing world-class services in computer technologies. Aagya was Founded by
                        </Typography>
                        <Link
                            variant="h6"
                            href="https://www.linkedin.com/in/kilewalavishesh/"
                            color="secondary"
                            underline="hover"
                            >
                        {' '}Vishesh Kilewala{' '}
                        </Link> 
                        <Typography display="inline" variant="h6">
                        .Vishesh is a
                        </Typography>
                        <Link
                            variant="h6"
                            href="https://www.northeastern.edu/"
                            color="secondary"
                            underline="hover"
                            >
                        {' '}Northeastern University{' '}
                        </Link> 
                        <Typography display="inline" variant="h6" align="justify">
                        Alumni and has over 15 years of Software Development, Open Source single board computer projects, 3d Modeling, and 3D Printing experience.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" align="justify">
                            Spanning in the field of Software development, Talent Solutions, and Computer Engineering Training we offer innovative and custom products according to your workflow. Our Software Development team consists of rockstar coders. Through our talent acquisition services you can quickly build your team, we are providing 3 different plans according to individual needs. Our software engineering training department is a playground for curious minds We don't only teach vanilla software development process but also encourage our students to take interest in other latest technologies like 3D printers, AR Programming, VR Application development, Hardware Hacking using Raspberry PI and Arduino Boards and sensors and much MORE...
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" align="justify">
                        We would like to thank you for visiting our website and taking the time to read our story if you'd like to avail any of our services please contact us and we would be happy to welcome you in our space where innovation is our common practice.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h2" color="secondary">
                            {`{(0)}`}
                        </Typography>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
                
        );
    }
}

export default Story;