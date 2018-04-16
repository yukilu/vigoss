import * as React from 'react';

import Category from './Category';
import { CATEGORIESLISTS, ShowedLists } from '../../store/data';

interface CategoriesProps {
    categories: string[];
    showedLists: ShowedLists;
    articleTitle: string;
}

export default function Categories(props: CategoriesProps) {
    const { categories, showedLists, articleTitle } = props;
    const items = categories.map(category => <Category key={category} lists={CATEGORIESLISTS[category]}
        listsTitle={category} listsShowed={showedLists[category]} articleTitle={articleTitle} />);
    return <div>{items}</div>;
}