import * as React from 'react';
import styled from 'styled-components';

const StyChosenA = styled.a`
    float: left;
    width: 8%;
    height: 60px;
    line-height: 60px;
    color: rgb(255,255,255);
    background: rgb(55, 57, 64);
    position: relative;
    curosr: pointer;
`;

const StyA = styled.a`
    float: left;
    width: 8%;
    height: 60px;
    line-height: 60px;
    color: #FFF;
    cursor: pointer;
    &:hover { color: rgb(97,218,251); }
`;

const StySpan = styled.span`
    width: 100%;
    height: 3px;
    background: rgb(97,218,251);
    position: absolute;
    left: 0;
    bottom: 0;
`;

const StyNav = styled.nav`
    height: 60px;
`;

export default function Nav(props: {}) {
    return (
        <StyNav>
            <StyChosenA>
                Blog
                <StySpan />
            </StyChosenA>
            <StyA href="poem.html">Poem</StyA>
        </StyNav>
    );
}