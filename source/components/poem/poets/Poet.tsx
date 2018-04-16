import * as React from 'react';
import styled from 'styled-components';

interface PoetProps {
    poemType: string;
    poet: string;
    toggleShow: () => void;
    getPoems: (poemType: string, author: string) => void;
}

function rand255(): number {
    return Math.floor(Math.random() * 256);
}

function getColor() {
    return `rgb(${rand255()},${rand255()},${rand255()})`;
}

const StySpan = styled.span`
    display: block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
`;

export default function Poet(props: PoetProps) {
    const { poemType, poet, toggleShow, getPoems } = props;
    const handleClick = () => {
        toggleShow();
        getPoems(poemType, poet);
    };

    return <StySpan style={{ color: getColor() }} onClick={handleClick}>{poet}</StySpan>;
}