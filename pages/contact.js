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

//do loop repeat componentification here

const data1 = [
  {name:"Discord", content:"https://discord.com/invite/"},
  {name:"Telegram", content:"not yet"},
  {name:"Twitter", content:"not yet"},
  {name:"Github", content:"https://github.com/neohumanism/union-website"},
];

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{padding:"20px",backgroundColor: "black", color: "white", secondary:"white"}}>

          <br/>
        <Typography variant="body1" paragraph>
          We are looking for people to work with. Do not hesitate to get in touch.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Social Media:
        </Typography>

        <Divider/>
        {data1.map((item, index) => ( //this is cringe, but low priority, so I don't bother making it good
        <ListItem key={index}>
          <ListItemText
            primary={item.name}
            secondary={(
              <Typography variant="body2" sx={{ color: "white" }}>
                {item.content}
              </Typography>
            )}            
          />
        </ListItem>
        ))}

        <Divider sx={{backgroundColor:"white", marginTop:"40px",marginBottom:"20px"}}/>

        <Typography variant="h6" gutterBottom>
          Contact Information:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Emails:" secondary={<Typography variant="body2" sx={{ color:"white" }}>
                human.mail.person@gmail.com
              </Typography>}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone Numbers:" secondary={<Typography variant="body2" sx={{ color:"white" }}>
                none yet
              </Typography>}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Address:" secondary={<Typography variant="body2" sx={{ color:"white" }}>
                not yet
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
