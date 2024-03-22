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
  {q: "Are the Library contents official?", a: "It is not part of our organization's charter/covenant, only the opinions of the authors. The media there is only meant to continue discussions on relevant topics."},
  {q: "Is your ideology \[good thing\] / \[bad thing\]?", a: "Read the charter and think for yourself."},
  {q: "Is your organization \[trustworthy\]?", a: "We hold every organization is corruptible, including ourselves, and that we may one day degenerate. Though, whether we have degenerated, you will have to verify with markers more reliable than mere assertions."},
  {q: "Do you support/oppose \[movement, organization, person, tribe\]?", a: "We do not inherently support any supposed alliegance. Any support or opposition by our organization will be merely a pragmatic move."},
  {q: "What do you think about \[thing\]?", a: "Our canon provides a complete take in that regard. Everything not covered by it is flexible, so our thoughts will depend on discretion and the current consensus."},
  {q: "What if I don't have time to read the canon?", a: "Then don't act like you know anything about it. Hearsay is unreliable."},
  {q: "What qualifications do I need to join?", a: "None. Even if you only do very little, you will still probably be a net gain."},
  {q: "What is the organization structure like?", a: "For now, you manage yourself. Others may give suggestions for what you could do."},
  {q: "I have criticisms or complaints.", a: "Criticisms and complaints are welcome, communicate them through the contact section."},
  {q: "I have questions not answered here.", a: "Ask in the contact section."},
];

//split to own md

const QnaPage = () => {
  return (
    <Container1>
    <br/><br/>
    <list>
      {QnaContent.map((item, index) => (
        <Typography key={index}>Q: {item.q}<br/>A: {item.a}<br/><br/></Typography>
      ))}
    </list>
    </Container1>
  );
};

export default QnaPage;
