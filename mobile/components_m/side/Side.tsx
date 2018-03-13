import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Categories from './Categories';
import { ReducerState } from '../../store_m/reducer';
import { CATEGORIES, getCategory } from '../../store_m/data';

interface StySideProps {
    showed: boolean;
}

const StySide = styled.aside`
    width: 100%;
    height: calc(100vh - 40px);
    position: fixed;
    left: 0;
    top: 40px;
    padding: 20px 0 0 20px;
    transition: opacity 0.5s ease;
    opacity: ${(props: StySideProps) => props.showed ? '1': '0'};
    background: #FFF;
    overflow: scroll;
`;

interface SideProps {
    articleTitle: string;
    showed: boolean;
}

function mapStateToProps(state: ReducerState) {
    const { articleTitle, showed } = state;
    return { articleTitle, showed };
}

@connect(mapStateToProps)
export default class Side extends React.Component<SideProps, {}> {
    render() {
        const { articleTitle, showed } = this.props;
        return (
            <StySide showed={showed}>
                <Categories categories={CATEGORIES} articleTitle={articleTitle} />
            </StySide>
        );
    }
}