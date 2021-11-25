import React from 'react';
import './NavBar.css'
import {IconButton, AppBar, Typography, Toolbar, useMediaQuery, Menu, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { MenuItem } from '@mui/material';
import { Slide, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom'


const styles = { customizeAppbar: {
    backgroundColor : "rgb(80,4,132)"
    }
};

function NavBar (props) {
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);

    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    }

    function HideOnScroll(props) {
        const { children } = props;
        const trigger = useScrollTrigger();
      
        return (
          <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
          </Slide>
        );
      }

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return(
        <HideOnScroll{...props}>
        <AppBar style={styles.customizeAppbar} position="relative">
        <Toolbar>
        {isMobile ? (<>
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
                    <MenuItem onClick={()=>setAnchor(null)}>
                        <Typography variant="h6">Home</Typography>
                    </MenuItem>
                    <MenuItem onClick={()=>setAnchor(null)}>
                        <Typography variant="h6">Our Story</Typography>
                    </MenuItem>
                    <MenuItem onClick={()=>setAnchor(null)}>
                        <Typography variant="h6">Services</Typography>
                    </MenuItem>
                    <MenuItem onClick={()=>(setAnchor(null))}>
                        <Typography variant="h6">Contact Us</Typography>
                    </MenuItem>
                </Menu>
                </div>

            </>) : (<div>
                        <Button component={Link} to = "/">home</Button>
                        <Button component={Link} to = "/Story">Our Story</Button>
                        <Button component={Link} to = "/Services">Services</Button>
                        <Button component={Link} to = "/Contact">Contact Us</Button>
                        
                    </div>)
            
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
    )
}

export default NavBar;