import * as React from 'react';
import styled from 'styled-components';

import PoemArticle from './PoemArticle';

import { Poem } from '../data';

interface PoemsListProps {
    poems: Poem[];
}

export default function PoemsList(props: PoemsListProps) {
    const { poems } = props;
    const items = poems.map((poem, index) => <PoemArticle key={index} poem={poem} />);
    return <ul>{items}</ul>;
} 