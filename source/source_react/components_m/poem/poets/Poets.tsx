import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PoetsList from './PoetsList';

import { POETRY_CATEGORIES, DATA_URL } from '../data';

interface StyPoetsUlProps {
    display: number;
}

const StyPoetsUl = styled.ul`
    display: ${(props: StyPoetsUlProps) => (props.display ? 'block' : 'none')};
    opacity: ${(props: StyPoetsUlProps) => (props.display ? 1 : 0)};
`;

interface PoetsProps {
    display: number;
    toggleShow: () => void;
    getPoems: (poemType: string, author: string) => void;
}

interface PoetsLists {
    [index: string]: string[];
}

interface PoetsState {
    poetsLists: PoetsLists
}

const initialPoetsLists: PoetsLists = {};
for (let poemType of POETRY_CATEGORIES)
    initialPoetsLists[poemType] = [];

export default class Poets extends React.Component<PoetsProps, PoetsState> {
    constructor(props: PoetsProps) {
        super(props);
        this.state = { poetsLists: initialPoetsLists };
    }

    componentDidMount() {
        axios.get(`${DATA_URL}/poets`).then(res => {
            // console.log(res.data);
            this.setState({ poetsLists: res.data });
        });
    }

    render() {
        const { display, toggleShow, getPoems } = this.props;
        const { poetsLists } = this.state;
        const items = POETRY_CATEGORIES.map(item => <PoetsList key={item} listTitle={item} 
            poets={poetsLists[item]} toggleShow={toggleShow} getPoems={getPoems} />);
        return <StyPoetsUl display={display}>{items}</StyPoetsUl>;
    }
}