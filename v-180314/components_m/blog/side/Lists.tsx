import * as React from 'react';
import styled from 'styled-components';

import List from './List';

interface ListsProps {
    lists: string[];
    articleTitle: string;
}

const StyListsUl = styled.ul`
    padding: 0;
`;

export default function Lists(props: ListsProps) {
    const { lists, articleTitle } = props;
    const items = lists.map(article => {
        let articleChosen = false;
        if (article === articleTitle)
            articleChosen = true;
        return <List key={article} chosen={articleChosen} articleTitle={article}>{article}</List>;
    });
    return <StyListsUl>{items}</StyListsUl>;
}