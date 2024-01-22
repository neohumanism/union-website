import React from 'react';
import { Container, Typography, Button, Card } from '@mui/material';
import Link from 'next/link';
import StackCard from '../components/stackcards';
import "typeface-cormorant-sc";

const AboutCards = [
  {title: "Who we are", desc: "We are an organization with ambitions to establish a new global order. The world is not in a good state, proponents of the current order are either helpless to stop, or actively leading humanity towards extinction. None of the necessary changes we hoped for appeared, and we could not find any group like this, so we took that duty upon ourselves - The duty to supplant the old order, avert the existential crisis, and steer humanity towards their greatest potential."},
  {title: "Our values", desc: "We are seekers of true meaning, and hold most of what is to be mere distractions, be it worldly pleasures or personal grievances. We believe the purpose of society, science, and progress is to realize true meaning, and therefore our place significance in them."},
  {title: "This website", desc: "Here, we explain our cause and argue to those with sympathies for why they should further support it. Most of the general population do value the futures of their children and hold themselves to moral standards. This is thence our appeal to explain the risks abound of our current situation, and why with their values considered in earnest, they should be lead to the same conclusions as us."},
  {title: "Our strategy", desc: "Most groups with similar ambitions to ours use ineffective strategies to push for their desired change. We do not rely on the good intentions of lawmakers nor on disorganized mobs. Instead, we endeavor to unify the momentum there is towards change behind a cohesive leadership to put our own lawmakers into power. <a href='/canon/strategy'>Read more</a>."},
  {title: "Lend your hand", desc: "Duty calls. <a href='/contact'>Contact us</a> to join up."},
  {title: "Questions", desc: "Have more surface-level questions but don't bother reading the canon? Read the <a href='/qna'>Q&A</a>. If it does not answer everything you wanted to ask, just ask in the contact page."},
]; //would like to use nextjs' <Link>, but seems very difficult to do

const AboutPage = () => {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4}}>
      {AboutCards.map((item, index) => (
        <StackCard title={item.title} desc={item.desc} key={index}/>
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
