import * as React from 'react';
import styled from 'styled-components';

import PoetsListContent from './PoetsListContent';
import { POEMTYPE_MAP } from '../data';

interface PoetsListProps {
    listTitle: string;
    poets: string[];
    toggleShow: () => void;
    getPoems: (poemType: string, author: string) => void;
}

const StyLi = styled.li`
    padding: 20px 0;
    margin-bottom: 20px;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const StyH2 = styled.h2`
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
`;

export default function PoetsList(props: PoetsListProps) {
    const { listTitle, poets, toggleShow, getPoems } = props;
    return (
        <StyLi>
            <StyH2>{POEMTYPE_MAP[listTitle]}</StyH2>
            <PoetsListContent poemType={listTitle} poets={poets} toggleShow={toggleShow} getPoems={getPoems} />
        </StyLi>
    );
}