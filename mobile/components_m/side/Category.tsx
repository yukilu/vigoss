import * as React from 'react';

import ListsTitle from './ListsTitle';
import Lists from './Lists';

interface CategoryProps {
    lists: string[];
    listsTitle: string;
    articleTitle: string;
}

export default function Category(props: CategoryProps) {
    const { lists, listsTitle, articleTitle } = props;
    return (
        <div>
            <ListsTitle listsTitle={listsTitle} />
            <Lists lists={lists} articleTitle={articleTitle} />
        </div>
    );
}