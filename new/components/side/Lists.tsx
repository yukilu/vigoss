import * as React from 'react';
import styled from 'styled-components';

import List from './List';

interface ListsProps {
    lists: string[];
    showed: boolean;
    articleTitle: string;
}

interface StyListsUlProps {
    showed: boolean;
}

const StyListsUl = styled.ul`
    padding: 0;
    display: ${(props: StyListsUlProps) => (props.showed ? 'block' : 'none')};
`;

export default function Lists(props: ListsProps) {
    const { lists, showed, articleTitle } = props;
    const items = lists.map(article => {
        let articleChosen = false;
        if (article === articleTitle)
            articleChosen = true;
        return <List key={article} chosen={articleChosen} articleTitle={article}>{article}</List>;
    });
    return <StyListsUl showed={showed}>{items}</StyListsUl>;
}