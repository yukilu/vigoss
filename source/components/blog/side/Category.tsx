import * as React from 'react';

import ListsTitle from './ListsTitle';
import Lists from './Lists';

interface CategoryProps {
    lists: string[];
    listsTitle: string;
    listsShowed: boolean;
    articleTitle: string;
}

export default function Category(props: CategoryProps) {
    const { lists, listsTitle, listsShowed, articleTitle } = props;
    return (
        <div>
            <ListsTitle listsTitle={listsTitle} listsShowed={listsShowed} />
            <Lists lists={lists} showed={listsShowed} articleTitle={articleTitle} />
        </div>
    );
}