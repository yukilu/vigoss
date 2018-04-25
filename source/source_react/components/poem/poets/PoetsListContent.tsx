import * as React from 'react';
import styled from 'styled-components';

import Poet from './Poet';

interface PoetsListContentProps {
    poemType: string;
    poets: string[];
    toggleShow: () => void;
    getPoems: (poemType: string, author: string) => void;
}

const StySection = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

export default function PoetsListContent(props: PoetsListContentProps) {
    const { poemType, poets, toggleShow, getPoems } = props;
    const items = poets.map(item => <Poet key={item} poemType={poemType} poet={item} 
        toggleShow={toggleShow} getPoems={getPoems} />);
    return <StySection>{items}</StySection>;
}