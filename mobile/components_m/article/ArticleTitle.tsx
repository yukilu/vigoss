import * as React from 'react';
import styled from 'styled-components';

const StyH = styled.h1`
    font-size: 25px;
    color: #282c34;
    margin: 0;
    margin-bottom: 20px;
`;

interface ArticleTitleProps {
    articleTitle: string;
}

export default function ArticleTitle(props: ArticleTitleProps) {
    return <StyH>{props.articleTitle}</StyH>;
}