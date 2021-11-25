import React, { Component } from 'react';
import { Typography } from '@mui/material';

const intro_main = "Aagya IT Services is providing employment opportunities and training in the field of Computer Science Engineering";

class BodyIntro extends Component {
    render() {
        return (
            <Typography variant='h4' align='center'>{intro_main}</Typography>
        );
    }
}

export default BodyIntro;