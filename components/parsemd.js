import React from 'react';
import { Typography } from '@mui/material';
import he from 'he';
import {lexer} from 'marked';
import MetaBar from '../components/metabar';
import styled from '@emotion/styled';

const Title = styled(Typography)`
  padding-bottom: 10px;
  padding-top: 15px;
`;

const parseMarkdown = (markdownContent) => {
    const tokens = lexer(markdownContent);
    const elements = [];
    tokens.forEach((token, index) => {
        switch (token.type) {
        case 'hr':
            break;
        case 'heading':
            const adjustedDepth = Math.max(1, token.depth + 2);
            elements.push(React.createElement(Title, { key: index, variant: `h${adjustedDepth}`  }, token.text));
            break;
        case 'paragraph':
            elements.push(
            React.createElement(
                Typography,
                { key: index, style: {} },
                parseParagraphTokens(token.tokens)
            )
            );
            break;
        case 'space':
            elements.push(React.createElement('br', { key: index }));
            break;
        case 'list':
            elements.push(
            React.createElement(
                'div',
                { key: index, style: {} },
                parseParagraphTokens(token.items)
            )
            );
        

        //also case "code" or smth? make a square for stuff
        default:
            break;
        }
    });
    return elements;
    };

    const parseParagraphTokens = (tokens) => {
        return tokens.map((token, index) => {
            switch (token.type) {
            case 'text':
                return he.decode(token.text);
            case 'image':
                return React.createElement('img', {
                key: index,
                src: token.href,
                alt: token.text,
                style: { maxWidth: '100%', height: 'auto' },
                });
            case 'link':
                return React.createElement(
                'a',
                { key: index, href: token.href, target: '_blank', rel: 'noopener noreferrer' },
                he.decode(token.text)
                );
            case 'list_item': //make fancy later
                return React.createElement(Typography,{ key: index, style: {} },"- "+he.decode(token.text));
            default:
                return null;
            }
        }
    );
};

export default parseMarkdown;