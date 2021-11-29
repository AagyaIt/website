import React from 'react';
import './NavBar.css'
import {IconButton, AppBar, Typography, Toolbar, useMediaQuery, Menu, Button, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { MenuItem, Grid } from '@mui/material';
import { Slide, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom'


const styles = { customizeAppbar: {
    backgroundColor : "rgb(80,4,132)",
    minHeight:70,
    margin:0
    }
};

function NavBar (props) {
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);

    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    }

    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({target:window ? window() : undefined});
      
        return (
          <Slide appear={false} direction={"down"} in={!trigger} timeout={1000}>
            {children}
          </Slide>
        );
      }

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return(
            <Grid container>
                <Grid item xs={12}>
                    <HideOnScroll{...props}>
                    <AppBar style={styles.customizeAppbar} position="fixed">
                    <Toolbar>
                        {isMobile ? (
                            <div>
                            <IconButton size="large" edge="start" color="primary" onClick={handleMenu}>
                            <MenuIcon />
                            </IconButton>
                            <Menu 
                            id="menu-appbar"
                            anchorEl={anchor}
                            anchorOrigin={{ vertical: "top" ,horizontal: "right"}}
                            keepMounted
                            transformOrigin={{ vertical: "top" ,horizontal: "right"}}
                            open={open}
                            >
                            <Typography align='center' variant='h5' color="secondary">
                                {'{(0)}'}
                            </Typography>
                            <MenuItem onClick={()=>setAnchor(null)}>
                                <Button color="secondary" component={Link} to="/">Home</Button>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={()=>setAnchor(null)}>
                                <Button color="secondary" component={Link} to="/Story">Our Story</Button>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={()=>setAnchor(null)}>
                                <Button color="secondary" component={Link} to="/Services">Services</Button>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={()=>(setAnchor(null))}>
                                <Button color="secondary" component={Link} to="/Contact">Contact us</Button>
                            </MenuItem>
                        </Menu>
                        </div>
                        ) : (    
                                <div>
                                    <Button component={Link} to = "/">home</Button>
                                    <Button component={Link} to = "/Story">Our Story</Button>
                                    <Button component={Link} to = "/Services">Services</Button>
                                    <Button component={Link} to = "/Contact">Contact Us</Button>
                                </div>
                            )
                    }
                    
                    {/* Growing Div     */}
                    <Typography variant="h3" color="inherit" component="div" sx={{flexGrow:1}}/>
                    {/* Logo */}
                    <Typography variant="h3" color="primary">
                    {`{(0)}`}
                    </Typography>
                         </Toolbar>
                        </AppBar>
                    </HideOnScroll>
                </Grid>
            </Grid>
    )
}

export default NavBar;