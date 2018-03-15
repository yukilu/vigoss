import * as React from 'react';
import styled from 'styled-components';

import { NAVTABS } from '../../store_m/data';

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

interface NavProps {
    navTab: string;
}

export default function Nav(props: NavProps) {
    const { navTab } = props;
    const items = NAVTABS.map((item, index) => {
        if (item === navTab)
            return <StyChosenA key={item}>{item}</StyChosenA>;
        if (item !== navTab && !index)
            return <StyA key={item} href="/">{item}</StyA>;
        return <StyA key={item} href={`${item.toLowerCase()}_mobile.html`}>{item}</StyA>;
    })
    return <StyNav>{items}</StyNav>;
}