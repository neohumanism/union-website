// pages/about.js
import React from 'react';
import { Container, Typography, Button, Card } from '@mui/material';
import Link from 'next/link';
import StackCard from '../components/stackcards';
import "typeface-cormorant-sc";

const AboutCards = [
  {title: "Who we are", desc: "We are an international organization that aims to supplant the current world order with one that is more rational and stable."},
  {title: "This website", desc: "Here, we explain our cause and argue to those with sympathies for why they should further support it."},
  {title: "Why we exist", desc: "The world is not in a good state, and society is moving towards collapse. We believe it is impossible to lead a \"normal\" life, and is why we hold that we were forced into this path."},
  {title: "Our strategy", desc: "Most activist groups use ineffective strategies to push for their desired change. We do not believe in the good intentions of lawmakers nor the effectiveness of disorganized mobs. Instead, we aim to unify the momentum there is behind a cohesive leadership to put our own lawmakers into power. <Link href='/canon/strategy'>Read more</Link>"},
  {title: "What we want from you", desc: "No one is safe from what is to come, including you. We want your participation in our movement to make the necessary changes for a stable world. <Link href='/contact'>Contact us</Link> or <Link href='/contact#network'>join our network</Link> to either work with us or remain a loose supporter."},
]; //fix linking later

const AboutPage = () => {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4}}>
      {AboutCards.map((item) => (
        <StackCard title={item.title} desc={item.desc}/>
      ))}

      <Link href="/">
      <Button
        variant="contained"
        sx={{ marginTop: 2, backgroundColor:"black", border: "1px solid white", borderRadius:0}}
      >
          Back to Home
      </Button>
      </Link>
    </Container>
  );
};

export default AboutPage;
