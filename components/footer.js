import React from 'react';
import { Typography, Container, Link, Grid } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#000000", color: "white", padding: "20px 0" }}>
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={6} md={6}>
            <Typography variant="h6">Reactionary Union</Typography>
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
              <Link color="inherit" href="https://github.com/neohumanism/union-website">
                Github
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link color="inherit" href="https://discord.com/invite/ZJSBAD4gdw">
                Discord
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
