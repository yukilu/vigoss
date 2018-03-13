import * as React from 'react';
import styled from 'styled-components';

import Category from './Category';
import { CATEGORIESLISTS, ShowedLists } from '../../store/data';

interface CategoriesProps {
    categories: string[];
    articleTitle: string;
}

const StyDiv = styled.div`
    padding-bottom: 40px;
`;

export default function Categories(props: CategoriesProps) {
    const { categories, articleTitle } = props;
    const items = categories.map(category => <Category key={category} lists={CATEGORIESLISTS[category]}
        listsTitle={category} articleTitle={articleTitle} />);
    return <StyDiv>{items}</StyDiv>;
}