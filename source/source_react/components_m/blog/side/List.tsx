import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { changeArticle, changeShowed, fetchArticle } from '../../store_m/actions';
import { ReducerState } from '../../store_m/reducer';

interface ListProps {
    chosen: boolean;
    articleTitle: string;
    showed?: boolean;
    changeAndGetArticle?: (title: string) => void;
}

interface StyLi {
    chosen: boolean;
}

const StyLi = styled.li`
    font: 18px/25px "sans-serif";
    font-weight: ${(props: StyLi) => (props.chosen ? 'bold' : 'normal') };
    height: 25px;
    padding-left: 25px;
    margin-top: 5px;
    position: relative;
    cursor: pointer;
    &:hover { color: rgb(109,109,109); }
`;

const StySpan = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 25px;
    background: rgb(97,218,251);
`;

function mapStateToProps(state: ReducerState) {
    return { showed: state.showed };
}

function mapDispatchToProps(dispatch) {
    return {
        changeAndGetArticle(title: string) {
            dispatch(changeArticle(title));
            dispatch(changeShowed(false));
            dispatch(fetchArticle(title));
        }
    };
}

const emptyFn = () => {};

@connect(mapStateToProps, mapDispatchToProps)
export default class List extends React.Component<ListProps, {}> {
    render() {
        const { chosen, articleTitle, showed, changeAndGetArticle, children } = this.props;
        const handleClick = () => {
            changeAndGetArticle(articleTitle);
        };

        return (
            <StyLi onClick={showed ? handleClick: emptyFn} chosen={chosen}>
                <a>{children}</a>
                {chosen ? <StySpan /> : null}
            </StyLi>
        );
    }
}