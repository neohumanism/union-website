import React from 'react';
import Table1 from '../components/table1';
import { Typography, Container } from '@mui/material';
import Image from 'next/image';

const ArticleGuide = () => {
    const headerData = {
        headers: ["Header", "Example", "Description"],
        rows: [
            ["title:", "\"Analysis of Economic Factors\"", "Title for your article. Is only used in browse."],
            ["author:", "\"John Doe\"", "Name of the article author."],
            ["published:", "\"23/9/2023\"", "Date your article was published in dd/mm/yyyy."],
            ["revised:", "\"4/8/2024\"", "Date this article was last revised in dd/mm/yyyy. Small edits to correct minor errors do not count as significant enough revisions."],
            ["thumbnail:", "\"middle_eastern_explosions.png\"", "Thumbnail picture for your article. Is only used in browse. Leave empty or write \"default\" if you don't have one."],
            ["type:", "\"article\"", "What type your media is. Your options are: \"article\", (NOT IMPLEMENTED: \"pdf\", \"image\", and \"video\")."],
            ["tags:", "\"\"", "Add some content tags for the search function. Note certain tags are mandatory to include when applicable, those being: \"informal\", \"nsfw\", \"anti-canon\", and \"normie-unfriendly\". All allowed tags are found at (NOT MADE YET)."],
        ]
    };
    const expressionData = {
        headers: ["Expression", "Example", "Description"],
        rows: [
            ["#", "# Hello!", "Header 1. Use for the title of the content."],
            ["##", "## Hello!", "Header 2. Use for names of the sections in the page."],
            ["###", "### Hello!", "Header 3. Use for whatever. Up to Header 5 supported."],
            ["N/A", "When you make a new line by pressing enter.", "It makes a new line in the article too when you do it."],
            ["``","`print(\"This is useless\")`","Code display area."],
            ["N/A","![Alternate text](/image.png)"," Image. Make sure to add the \"/\" to the front of the image link to look in our local folder, as opposed to online links."],
            ["N/A","This is [an example](http://example.com) inline link.","Inline link."],
        ]
    };
    const wipData = {
        headers: ["Expression", "Example", "Description"],
        rows: [            
            [">","> Hello","Block quote."],
            ["-","- Item","Unordered list."],
            ["1.","1. Item","Ordered list."],
            ["**","*This sentence is sarcastic*","Italic text."],
            ["__","_This sentence is a lie_","Italic text."],
            ["****","**Your mom is the biggest known lifeform**","Bold text."],
            ["____","__Be happy__","Bold text."],
            ["~~~~","~~This is cancelled~~","Strikethrough text."],
            ["N/A","This is [an example][1] ... [1]: http://example.com","Reference link."],
            ["N/A","Here is a footnote[^1] ... [^1]: This is the footnote.","Footnote."],
            ["N/A","WIP","Table."],
        ]
    };
    return (
        <Container>
        <br/>
        <Typography>Makeshift page. Not great for variable screen support.</Typography>
        <Typography>All header data must be included. Place the header area first in your document. Don't mess with case in the header names. All the headers together need to be enclosed in: --- HEADERS GO HERE ---</Typography>
        <Table1 data={headerData} />
        <br/>
        <Table1 data={expressionData} />
        <br/>
        <br/>
        <Typography>Example of what an article file looks like in editor:</Typography>
        <Image src="/articleexample.png" width="800" height="500"/>
        <br/><br/><br/>
        <h2>These are not yet supported, but are planned to be in the future:</h2>
        <Table1 data={wipData} />
        </Container>
    );
};

export default ArticleGuide;
