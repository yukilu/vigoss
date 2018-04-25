import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { changeShowedLists } from '../../store/actions';
import { getCategory } from '../../store/data';

interface ListsTitleProps {
    listsTitle: string;
    categoryChosen: boolean;
    listsShowed: boolean;
    toggleShowedLists: (category: string) => void;
}

interface StyListsTitleDivProps {
    showed: boolean;
}

const StyDiv = styled.div`
    height: 40px;
    line-height: 40px;
    color: ${(props: StyListsTitleDivProps) => (props.showed ? 'black' : 'rgb(109,109,109)')};
    padding-left: 25px;
    cursor: pointer;
    &:hover { color: black; }
`;

interface ArrowProps {
    showed: boolean;
}

const Arrow = styled.span`
    display: inline-block;
    width: 10px;
    height: 8px;
    margin-left: 8px;
    background: no-repeat url(${(props: ArrowProps) => (props.showed ? 'up.png' : 'down.png')});
`;

function mapDispatchToProps(dispatch) {
    return {
        toggleShowedLists(category: string) {
            dispatch(changeShowedLists(category));
        }
    };
}

@connect(null, mapDispatchToProps)
export default class ListsTitle extends React.Component<ListsTitleProps, {}> {
    render() {
        const { listsTitle, listsShowed, toggleShowedLists } = this.props;
        const handleClick = () => {
            toggleShowedLists(listsTitle);
        };

        return (
            <StyDiv onClick={handleClick} showed={listsShowed}>
                {listsTitle}
                <Arrow showed={listsShowed} />
            </StyDiv>
        );
    }
}