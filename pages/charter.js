import React from 'react';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import { getFile } from '../components/getstatics';
import parseMarkdown from '../components/parsemd';

const CharterPage = ({data}) => {
    const text = parseMarkdown(data);
    return (
        <Container sx={{ marginTop: 4, marginBottom: 4}}>
            <Typography>This is the charter and covenant of this organization.</Typography>
            {text} {/*fix parsing stuff*/}
        </Container>
    );
};

export async function getStaticProps({ params }) {
  return getFile('text', 'charter.md');
};

export default CharterPage;
