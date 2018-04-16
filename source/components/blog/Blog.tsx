import * as React from 'react';

import Header from './header/Header';
import Article from './article/Article';
import Side from './side/Side';

export default class Blog extends React.Component<{}, {}> {
    render() {
        return (
            <>
                <Header navTab="Blog" />
                <Article />
                <Side />
            </>
        );
    }
}