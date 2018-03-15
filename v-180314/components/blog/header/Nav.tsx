import * as React from 'react';
import styled from 'styled-components';

import { NAVTABS } from '../../store/data';

const StyChosenA = styled.a`
    float: left;
    width: 8%;
    height: 60px;
    line-height: 60px;
    color: rgb(97,218,251);
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

interface NavProps {
    navTab: string;
}

export default function Nav(props: NavProps) {
    const { navTab } = props;
    const items = NAVTABS.map((item, index) => {
        if (item === navTab)
            return <StyChosenA key={item}>{item}<StySpan /></StyChosenA>;
        if (item !== navTab && !index)
            return <StyA key={item} href="/">{item}</StyA>;
        return <StyA key={item} href={`${item.toLowerCase()}.html`}>{item}</StyA>;
    })
    return <StyNav>{items}</StyNav>;
}