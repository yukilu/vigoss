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

export default function Header(props: {}) {
    return <StyHeader><Nav /></StyHeader>;
}