import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Categories from './Categories';
import { ReducerState } from '../../store/reducer';
import { CATEGORIES, getCategory, ShowedLists } from '../../store/data';

const StySide = styled.aside`
    width: 27%;
    height: calc(100vh - 120px);
    position: fixed;
    right: 0;
    top: 60px;
    background: rgb(247,247,247);
    padding: 60px 0 0 2%;
`;

interface SideProps {
    articleTitle: string;
    showedLists: ShowedLists;
}

function mapStateToProps(state: ReducerState) {
    const { articleTitle, showedLists } = state;
    return { articleTitle, showedLists };
}

@connect(mapStateToProps)
export default class Side extends React.Component<SideProps, {}> {
    render() {
        const { articleTitle, showedLists } = this.props;
        return (
            <StySide>
                <Categories categories={CATEGORIES} showedLists={showedLists} articleTitle={articleTitle} />
            </StySide>
        );
    }
}