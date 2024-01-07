import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{padding:"20px",backgroundColor: "black", color: "white", secondary:"white"}}>

          <br/>
        <Typography variant="body1" paragraph>
          We are actively seeking new people to work with. Do not hesitate to get in touch.
        </Typography>

        <Divider />


        <Typography variant="h6" gutterBottom>
          Social Media:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Discord:" secondary="https://discord.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Telegram: " secondary="https://telegram.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Twitter: " secondary="https://twitter.com" />
          </ListItem>
        </List>
        <Divider />

        <Typography variant="h6" gutterBottom>
          Contact Information:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Emails:" secondary={<Typography variant="body2" sx={{ color:"white" }}>
                mail@mail.mail<br/> gmail@gmail.gmail
              </Typography>}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone Numbers:" secondary={<Typography variant="body2" sx={{ color:"white" }}>
                +99 999 99 999<br/> +22 222 22 222
              </Typography>}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Address:" secondary={<Typography variant="body2" sx={{ color:"white" }}>
                not yet :/
              </Typography>}/>
          </ListItem>
        </List>
        <Divider />

        <Typography variant="h6" gutterBottom>
          Privacy Notice:
        </Typography>
        <Typography variant="body1" paragraph>
          As of now, we do not collect any information on your website activity. For added clarity, read our <Link href="/tos#privy">Privacy Policy</Link>.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Contact;
