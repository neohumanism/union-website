import React from 'react';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import styled from '@emotion/styled';

const Container1 = styled(Container)`
  @media (min-width: 900px) {
    width: 66%;
  }
`;

//should have a search function here? use a search engine integration? (because this is not to the letter of what you'd come up with or whatever)
const QnaContent = [ //get linking from the about page's stuff once we figured that out
  {q: "Is what is written in Media part of the canon?", a: "It is not canon, only the opinions of the authors. Media is mostly meant to be thought-provoking and to facilitate discussion."},
  {q: "Do you have \[tribal alliegance, moral righteousness, legitimacy, honesty, rationality, meritocracy, etc.\]?", a: "Read the canon and think for yourself."},
  {q: "Are you \[bad thing\]?", a: "Read the canon and think for yourself."},
  {q: "What if I don't have time to read the canon?", a: "Then don't act like you know anything about it. Hearsay is useless."},
  {q: "What qualifications do I need to join?", a: "None. Even if you only do very little, you will still be a net gain."},
  {q: "What is the organization structure like?", a: "You manage yourself. Others may give suggestions for what you could do."},
  {q: "I have a question not answered here.", a: "Ask in the contact section."},
];

const QnaPage = () => {
  return (
    <Container1>
    <p>i will make this look good later</p><br/><br/>
    <list>
      {QnaContent.map((item, index) => (
        <Typography>Q:{item.q}<br/>A:{item.a}<br/><br/></Typography>
      ))}
    </list>
    </Container1>
  );
};

export default QnaPage;
