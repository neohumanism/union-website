import React from 'react';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import StackCard from '../components/stackcards';
import "typeface-cormorant-sc";
import CardGrid from '../components/cardgrid';
import Image from 'next/image';
import Box from '@mui/material/Box';

const style1 = {
  width:"100%",
  height:"100vh",
  backgroundImage: 'url("/temp.png")',
  backgroundSize: "100% 100%",
  backgroundPosition: "center",

}

const appeal = [ //center text the titles
  {title: 'A duty to mankind?', content: 'Do you feel as if it is your duty to act for the betterment of mankind? We want to maximize'},
  {title: 'A broken order?', content: 'The current world order has turned against mankind. We operate around the West and its periphery first. Do you too believe change is needed?'},
  {title: 'A tenable solution?', content: 'The anti-establishment force is currently disjointed and without a clear direction. '},
];

const talk = [
  {title: "Supplant the modern order", desc: "Throughout the West, reactionary elements have found themselves helpless against the tide of modernity. This modernity has parts that erode the fabric society was built on, leading us on the path to collapse. We will unify the reactionaries under a cohesive creed and organization so that we may supplant the modern order with a more grounded one.", alignment:"center"},
  {title: "Root out extremism", desc: "Society does not benefit from extremist dogmas that create totalitarian dictatorships or tear it apart. Yet, political moderates and laypeople always helpless to the devoted few that desire it. We aim to root out the extremists wherever they are, be it on the Left or on the Right. And we aim to foster rational and emotionally strong belief-systems to keep extremist dogma at bay.",alignment:"center"},
  {title: "Solve the existential crisis", desc: "The degenerate state of politics today is unable to properly grasp the kind of crossroads humanity currently finds itself in, much less find the capacity to solve it. By instating rationality and a common goal into the world, we hope to reopen a discussion of how to tackle the world's existential problems, this time in earnest.", alignment:"center"},
];

const Home = () => {
  return (
    <>
      <Container maxWidth="xl" style={style1}> {/*make the underneath have a cool effect that they come from the bottom to there when they are loaded in*/}
        <Box display="flex" justifyContent="center" alignItems="center" sx={{paddingTop:"10vh"}}> {/*a media query for very long screens?*/}
        <Image src="/bigic.png" height={300} width={300} style={{height:"50vh", width:"50vh"}}/> {/*add a media query for small screens*/}{/*design not final maybe. also could do with being a vector*/}
        </Box>
        <Typography variant="h3" sx={{textAlign:"center", fontFamily:"Cormorant SC"}}>What must be done?</Typography>
      </Container>

      <Container maxWidth="x1">
        <CardGrid data={appeal}/> {/*have "learn more" buttons here*/}
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
