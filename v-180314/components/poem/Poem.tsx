import * as React from 'react';

import Header from '../blog/header/Header';
import Poetry from './Poetry';

export default function Poem(props: {}) {
    return (
        <>
            <Header navTab="Poem" />
            <Poetry />
        </>
    );
}