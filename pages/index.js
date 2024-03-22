import React from 'react';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
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
};

//need some universal styling where it would be shorter than just using sx on every page

const appeal = [
  {title: 'About our broken world order?', content: 'The current world order is broken. Most local orders too. And not just in politics, but in every other aspect, be it culture, economics, demographics, and so on. A dire time approaches, and heroes must step up.'},
  {title: 'For a tenable solution?', content: 'As it stands, all forces of change are disjointed, fail to see reality, and act without clear direction. No force has been able to keep humanity on the right course. As such, we must take a reflect and avoid their mistakes.'},
  {title: 'For the pursuit of greater good?', content: 'Do you seek to maximize your positive impact? We share your aspiration. That is why we study how one may make the greatest positive impact, and hope to provide the likeminded with resources to reach further.'},
  {title: "About modernity?", content: "The tide of cultural \"modernization\" threatens to sweep away the routines society depends on. Reactionaries have both been helpless and without good solutions. A more rational and less nostalgic approach is needed."},
  {title: "About extremism?", content: "Extremist dogmas have come once again with promises that would result in no less than the utter jeapordy of civlization. If left alone, the fanatical few will always find a way. We must act before they seize power."},
  {title: "About the existential crisis?", content: "From environmental damage, to AI, bioweapons, and etc., the degenerate state of politics today is unable to properly grasp the kind of crossroads humanity currently finds itself in, much less find the capacity to solve it."},
  {title: "For the realization of meaning?", content: "Modern day has no conception of what is \"greater than life\", resorting to make-believe and hedonism, such that existence appears meaningless. Others feel isolated or unfulfilled. So we must set out to find true meaning."},
  {title: "Against organized criminals?", content: "Most of the world is either run by or in kahoots with organized criminals. They snuff out hopes of regional progress only for temporary personal benefits. If we are to reach our greatest potential, this cannot stand."},
  {title: "About industrial society?", content: "The industrial revolution and its conseqeuences have upended the old way of life, something human cultures have not fully caught up to pace with. Misery from the erasure of communities and loss of control are rampant."},
]; 
//these are supposed to represent the objectively most pressing issues in society (in no particular order)
//not sure if I hit the mark 100%, as the justifications are mostly just intuitive
//also not sure where these are supposed to link. to the canon somewhere? idk
//alternatively we just have one big button underneath all of those to lead you to the canon

const Home = () => {
  return (
    <>
      <Container maxWidth="xl" style={style1}> {/*make the underneath have a cool effect that they come from the bottom to there when they are loaded in*/}
        <Box display="flex" justifyContent="center" alignItems="center" sx={{paddingTop:"10vh"}}> {/*a media query for very long screens?*/}
        <Image src="/bigic.png" height={300} width={300} style={{height:"50vh", width:"50vh"}}/> {/*add a media query for small screens*/}{/*design not final maybe. also could do with being a vector*/}
        {/*the image size was funky when first loading in on mobile?*/}
        </Box>
        <Typography variant="h3" sx={{textAlign:"center", fontFamily:"Cormorant SC"}}>What must be done?</Typography>
      </Container>


      <Container maxWidth="x1">
        <CardGrid data={appeal}/>
        <br/>
        {/*<Typography variant="h1" sx={{textAlign:"center",paddingTop:"10px", fontFamily:"Cormorant SC", fontWeight:300,color:"red", textTransform:"lowercase"}}>To this century and beyond</Typography>*/}
        <br/><br/><br/>
      </Container>
    </>
  );
};

export default Home;
