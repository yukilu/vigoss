import * as React from 'react';
import styled from 'styled-components';

import Back from './Back';
import PoemsList from './PoemsList';

import { Poem } from '../data';

interface StyPoemsDivProps {
    display: number;
}

const StyPoemsDiv = styled.div`
    width: 500px;
    margin: 0 auto;
    display: ${(props: StyPoemsDivProps) => (props.display ? 'block' : 'none')};
    opacity: ${(props: StyPoemsDivProps) => (props.display ? 1 : 0)};
`;

interface PoemsProps {
    poems: Poem[];
    display: number;
    toggleShow: () => void;
}

export default function Poems(props: PoemsProps) {
    const { display, poems, toggleShow } = props;
    return (
        <StyPoemsDiv display={display}>
            <Back toggleShow={toggleShow} />
            <PoemsList poems={poems} />
        </StyPoemsDiv>
    );
}