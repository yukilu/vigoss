import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Poets from './poets/Poets';
import Poems from './poems/Poems';

import { DATA_URL, Poem } from './data';

interface PoetryState {
    poetsDisplay: boolean;
    poems: Poem[];
}

interface CachedPoems { [index: string]: Poem[] }
interface CachedPoetry { [index: string]: CachedPoems }

const cachedPoetry: CachedPoetry = { modern: {}, songPoem: {}, songPoetry: {} };

const StyMain = styled.main`
    padding-top: 40px;
    margin: 0;
    font-size: 16px;
`;

export default class Poetry extends React.Component<{}, PoetryState> {
    constructor(props: {}) {
        super(props);
        this.toggleShow = this.toggleShow.bind(this);
        this.getPoems = this.getPoems.bind(this);
        this.state = { poetsDisplay: true, poems: [] };
    }

    toggleShow() {
        this.setState(prevState => ({ poetsDisplay: !prevState.poetsDisplay }));
    }

    getPoems(poemType: string, author: string) {
        let poems = cachedPoetry[poemType][author];
        if (poems) {
            this.setState({ poems });
            return;
        }

        const url = `${DATA_URL}/poemType/${poemType}/author/${author}`;
        axios.get(url).then(res => {
            poems = res.data;
            cachedPoetry[poemType][author] = poems;
            this.setState({ poems });
        });
    }

    render() {
        const { poetsDisplay, poems } = this.state;
        return (
            <StyMain>
                <Poets display={poetsDisplay ? 1 : 0} toggleShow={this.toggleShow} getPoems={this.getPoems} />
                <Poems display={!poetsDisplay ? 1 : 0} toggleShow={this.toggleShow} poems={poems} />
            </StyMain>
        )
    }
}