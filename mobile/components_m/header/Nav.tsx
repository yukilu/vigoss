import * as React from 'react';
import styled from 'styled-components';

const StyChosenA = styled.a`
    flex-grow: 1;
    height: 40px;
    line-height: 40px;
    color: rgb(97,218,251);
`;

const StyA = styled.a`
    flex-grow: 1;
    height: 40px;
    line-height: 40px;
    color: #FFF;
`;

const StyNav = styled.nav`
    display: flex;
    height: 40px;
    padding: 0 20px;
`;

const navLists = ['Blog', 'Poem', 'Game', 'About']

export default function Nav(props: {}) {
    const items = navLists.map((item, index) => {
        if (!index)
            return <StyChosenA key={item}>{item}</StyChosenA>;
        return <StyA key={item}>{item}</StyA>;
    });

    return <StyNav>{items}</StyNav>;
}