import * as React from 'react';
import styled from 'styled-components';

const StyChosenA = styled.a`
    float: left;
    width: 80px;
    height: 60px;
    line-height: 60px;
    color: rgb(255,255,255);
    background: rgb(55, 57, 64);
    position: relative;
`;

const StyA = styled.a`
    float: left;
    width: 80px;
    height: 60px;
    line-height: 60px;
    color: #FFF;
    &:hover { color: rgb(97,218,251); }
`;

const StySpan = styled.span`
    width: 80px;
    height: 3px;
    background: rgb(97,218,251);
    position: absolute;
    left: 0;
    bottom: 0;
`;

export default function Nav(props: {}) {
    return (
        <nav>
            <StyChosenA>
                Blog
                <StySpan />
            </StyChosenA>
            <StyA>Poem</StyA>
        </nav>
    );
}