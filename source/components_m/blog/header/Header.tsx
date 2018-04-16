import * as React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const StyHeader = styled.header`
    text-align: center;
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(32,35,42);
`;

interface HeaderProps {
    navTab: string;
}

export default function Header(props: HeaderProps) {
    return <StyHeader><Nav navTab={props.navTab} /></StyHeader>;
}