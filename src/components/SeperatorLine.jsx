import React, { Component } from 'react';
import { Grid, Paper } from '@mui/material';

//Icons
import AdbIcon from '@mui/icons-material/Adb';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import NfcIcon from '@mui/icons-material/Nfc';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import SensorsIcon from '@mui/icons-material/Sensors';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import UsbIcon from '@mui/icons-material/Usb';
import VerifiedIcon from '@mui/icons-material/Verified';
import WidgetsIcon from '@mui/icons-material/Widgets';
import WifiIcon from '@mui/icons-material/Wifi';
import ThreeGMobiledataIcon from '@mui/icons-material/ThreeGMobiledata';
import TagIcon from '@mui/icons-material/Tag';
import SourceIcon from '@mui/icons-material/Source';
import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';
import MouseIcon from '@mui/icons-material/Mouse';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
//Colors
import { 
    pink, 
    amber,  
    deepPurple, 
    deepOrange, 
    lightGreen, 
    teal, 
    lightBlue, 
    blueGrey,
    lime,
    indigo,
    red,
    purple,
    cyan,
    orange,
    green
    } from '@mui/material/colors';

const shade = 800;
const fontSize = 20;

class SeperatorLine extends Component {
    render() {
        return (
            <Paper elevation={0}>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <ComputerIcon sx={{color: pink[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <BuildIcon sx={{color: lightGreen[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>   
                        <MouseIcon sx={{color: deepPurple[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <KeyboardIcon sx={{color: deepOrange[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <DeveloperModeIcon sx={{fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <AttachMoneyIcon sx={{color: amber[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <AdbIcon sx={{color: teal[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <AlternateEmailIcon sx={{color: orange[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <EmojiObjectsIcon sx={{color: lime[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <MiscellaneousServicesIcon sx={{color: indigo[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <NfcIcon sx={{color: red[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <PersonPinIcon sx={{color: deepPurple[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <QrCode2Icon sx={{color: lightBlue[shade], fontSize:fontSize}}/>
                    </Grid>
                    <Grid item>
                        <SensorsIcon sx={{color: blueGrey[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <TouchAppIcon sx={{color: cyan[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <UsbIcon sx={{color: purple[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <VerifiedIcon sx={{color: amber[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <UsbIcon sx={{color: pink[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <SourceIcon sx={{color: green[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <UsbIcon sx={{color: red[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <TagIcon sx={{color: deepPurple[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <ThreeGMobiledataIcon sx={{color: lightGreen[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <WifiIcon sx={{color: amber[shade], fontSize:fontSize}}/>
                    </Grid>        
                    <Grid item>
                        <WidgetsIcon sx={{color: blueGrey[500], fontSize:fontSize}}/>
                    </Grid>        
                </Grid>
            </Paper>
        );
    }
}

export default SeperatorLine;