import React from 'react';
import { Typography, Link, Grid } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#000000", color: "white", padding: "20px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={6} md={6}>
            <Typography variant="h6">New Order</Typography>
            <Typography variant="body2" color="inherit">
              © No rights reserved as of {new Date().toISOString().split('T')[0]}
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} style={{ textAlign: 'right' }}>
            <Typography variant="h6">Links</Typography>
            <Typography variant="body2">
              <Link color="inherit" href="/contact">
                Contact us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link color="inherit" href="/tos">
                ToS & Privacy Policy
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link color="inherit" href="/qna">
                Q&A
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link color="inherit" href="https://discord.com/invite/ZJSBAD4gdw">
                Discord
              </Link>
            </Typography>
          </Grid>
        </Grid>
    </footer>
  );
}

export default Footer;
