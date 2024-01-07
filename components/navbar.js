import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import "typeface-cormorant-sc";

const BarLinksData = [
  {name: "Home", link: "/"},
  {name: "About", link: "/about"},
  {name: "Media", link: "/media"},
  {name: "Canon", link: "/canon"},
  {name: "Dictionary", link: "/dictionary"},
  {name: "Contact", link: "/contact"},
];

const BarLinks = ({data}) => {
  return (
    <>
      {data.map((item) => (
        <Link href={item.link}>
        <Button color="inherit">{item.name}</Button>
        </Link>
      ))}
  </>
  );
};

const MenuLinks = ({data, close}) => {
  return (
    <List sx={{width:"100%"}}>
      {data.map((item) => (
        <Link href={item.link} onClick={close}>
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
          Reactionary Union
        </Typography>
        <Hidden smDown implementation="css">
          <BarLinks data={BarLinksData}/>
        </Hidden>
        
        <Hidden mdUp implementation="css">
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
