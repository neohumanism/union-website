// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Menu button for small screens */}
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

          {/* Logo or Branding */}
          <Link href="/">
            <a style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant="h6">
                Your Logo or Branding
              </Typography>
            </a>
          </Link>

          {/* Navigation options for larger screens */}
          <Hidden smDown implementation="css">
            <List component="nav">
              <ListItem button>
                <Link href="/home">
                  <a>
                    <ListItemText primary="Home" />
                  </a>
                </Link>
              </ListItem>
              <ListItem button>
                <Link href="/about">
                  <a>
                    <ListItemText primary="About" />
                  </a>
                </Link>
              </ListItem>
              {/* Add more navigation options as needed */}
            </List>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <Link href="/home">
              <a>
                <ListItemText primary="Home" />
              </a>
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link href="/about">
              <a>
                <ListItemText primary="About" />
              </a>
            </Link>
          </ListItem>
          {/* Add more navigation options as needed */}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
