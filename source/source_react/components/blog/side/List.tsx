import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { changeArticle, fetchArticle } from '../../store/actions';

interface ListProps {
    chosen: boolean;
    articleTitle: string;
    changeAndGetArticle: (title: string) => void;
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
    color: ${(props: StyLi) => (props.chosen ? 'rgb(0,0,0)' : 'rgb(26,26,26)')};
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

function mapDispatchToProps(dispatch) {
    return {
        changeAndGetArticle(title: string) {
            dispatch(changeArticle(title));
            dispatch(fetchArticle(title));
        }
    };
}

class List extends React.Component<ListProps, {}> {
    render() {
        const { chosen, articleTitle, changeAndGetArticle, children } = this.props;
        const handleClick = () => {
            changeAndGetArticle(articleTitle);
        };

        return <StyLi onClick={handleClick} chosen={chosen}><a>{children}</a>{chosen ? <StySpan /> : null}</StyLi>;
    }
}

const ConnectedList = connect(null, mapDispatchToProps)(List);
export default ConnectedList;