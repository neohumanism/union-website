import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Hidden, Drawer, Box, List, ListItem } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import "typeface-cormorant-sc";

const BarLinksData = [
  {name: "Home", link: "/"},
  {name: "About", link: "/about"},
  {name: "Library", link: "/library"},
  {name: "Charter", link: "/charter"},
  {name: "Dictionary", link: "/dictionary"},
  {name: "Contact", link: "/contact"},
];

const BarLinks = ({data}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
      {data.map((item, index) => (
        <Link href={item.link} key={index} >
        <Button color="inherit">{item.name}</Button>
        </Link>
      ))}
    </Box>
  );
};

const MenuLinks = ({data, close}) => {
  return (
    <List sx={{width:"100%"}}>
      {data.map((item, index) => (
        <Link href={item.link} onClick={close} key={index}>
        <ListItem sx={{width:"100%",textAlign:"center",backgroundColor:"#121212",marginBottom:"14px",height:"70px"}}>
        {item.name}
        </ListItem>
        </Link>
      ))}
  </List>
  );
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <div>
    <AppBar position="static" style={{backgroundColor: "#000000", color: "white"}}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{flexGrow: 1, fontFamily:"Cormorant SC", textTransform:"lowercase", marginTop:"-3px", whiteSpace:"nowrap"}}>
          New Order {/*might work better as just an image, given the fontload is 0.2 seconds or w/e*/}
        </Typography>
        <Hidden smDown implementation="css"> {/*the hiding here should not display both at the same time, unlike what happens now between 900 and 600 width or something*/}
          <BarLinks data={BarLinksData}/>
        </Hidden>
        
        <Hidden smUp implementation="css">
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerOpen}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
    
    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose} PaperProps={{sx:{backgroundColor: "black",color: "white", width:"50%"}}}>
      <MenuLinks data={BarLinksData} close={handleDrawerClose}/>
    </Drawer>
    </div>
  );
};

export default Navbar;
