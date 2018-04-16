import * as React from 'react';
import styled from 'styled-components';

import PoemContent from './PoemContent';

import { Poem } from '../data';

const StyPoemLi = styled.li`
    padding: 0 20px 10px;
    margin-bottom: 40px;
    overflow: hidden;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const StyPoemH3 = styled.h3`
    padding-left: 5px;
`;

const StyPoemAuthor = styled.p`
    margin-left: 20px;
`;

interface PoemArticleProps {
    poem: Poem;
}

export default function PoemArticle(props: PoemArticleProps) {
    const { title, author, content } = props.poem;
    return (
        <StyPoemLi>
            <StyPoemH3>{title}</StyPoemH3>
            <StyPoemAuthor>{author}</StyPoemAuthor>
            <PoemContent content={content} />
        </StyPoemLi>
    );
}