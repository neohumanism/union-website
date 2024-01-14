// Example: pages/index.js
import React from 'react';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import CardGrid from '../components/cardgrid';
import StackCard from '../components/stackcards';
import LinkCard from '../components/linkcard';
import "typeface-cormorant-sc";

//fix grid to go vertical on small screen

const news = [ //this is just temporary until we set up database
  {title: 'Is Spaceshipman an ally?', content: 'Spaceshipman has just unveiled his latest genius idea of new roads under our current roads. Investors say this...', image: "lol.jpg"},
  {title: 'Is the \"libertarian left\" a grift?', content: 'You can\'t enforce equality without the equivalent of a police to do it, so how do left libertarians suggest it...', image: "lol.jpg"},
  {title: 'Is a unified ideology necessary?', content: 'The Right is currently disjointed and without a clear direction, and has repeatedly been losing ground to...', image: "lol.jpg"},
  {title: 'Does Dreamland belong to Kirby?', content: 'Kirby says his ancestors lived there 2000 years ago. On the other hand, waddle dees have since moved in...', image: 'lol.jpg'},
  {title: 'Was freedom of speech a mistake?', content: 'Many right-wing proponents have stated freedom of speech was what allowed the woke ideology to...', image: "lol.jpg"},
  {title: 'Will China go to war over Taiwan?', content: 'The PRC has in recent times increased its military posturing against the ROC (Taiwan), so it would...', image: "lol.jpg"},
];

const talk = [
  {title: "We shall supplant the modern order", desc: "Throughout the West, reactionary elements have found themselves helpless against the tide of modernity. This modernity has parts that erode the fabric society was built on, leading us on the path to collapse. We will unify the reactionaries under a cohesive creed and organization so that we may supplant the modern order with a more grounded one.", alignment:"center"},
  {title: "We shall root out extremism", desc: "Society does not benefit from extremist dogmas that create totalitarian dictatorships or tear it apart. Yet, political moderates and laypeople always helpless to the devoted few that desire it. We aim to root out the extremists wherever they are, be it on the Left or on the Right. And we aim to foster rational and emotionally strong belief-systems to keep extremist dogma at bay.",alignment:"center"},
  {title: "We shall solve the existential crisis", desc: "The degenerate state of politics today is unable to properly grasp the kind of crossroads humanity currently finds itself in, much less find the capacity to solve it. By instating rationality and a common goal into the world, we hope to reopen a discussion of how to tackle the world's existential problems, this time in earnest.", alignment:"center"},
];

const Home = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{backgroundColor:"#121212",marginTop:"17px"}}>
        <CardGrid data={news}/>
        <br/>
      </Container>
      <Container maxWidth="x1">
        <br/>
        {talk.map((item) => (
        <StackCard title={item.title} desc={item.desc}/>
        ))}
        <Typography variant="h1" sx={{textAlign:"center",paddingTop:"10px", fontFamily:"Cormorant SC", fontWeight:300,color:"red", textTransform:"lowercase"}}>To this century and beyond</Typography>
        <br/><br/><br/>
      </Container>
    </>
  );
};

export default Home;
