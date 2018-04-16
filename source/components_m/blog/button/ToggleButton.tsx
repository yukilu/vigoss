import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Up } from './Up';
import { Down } from './Down';

import { ReducerState } from '../../store_m/reducer';
import { changeShowed } from '../../store_m/actions';

interface ToggleButtonProps {
    showed: boolean;
    changeOpacity: (showed: boolean) => void;
}

const StyDiv = styled.div`
    width: 62px;
    height: 62px;
    background: #20232a;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 40px;
    color: #FFF;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    z-index: 5;
`;

function mapStateToProps(state: ReducerState) {
    return { showed: state.showed };
}

function mapDispatchToProps(dispatch) {
    return {
        changeOpacity(showed: boolean) {
            dispatch(changeShowed(showed));
        }
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ToggleButton extends React.Component<ToggleButtonProps, {}> {
    render() {
        const { showed, changeOpacity } = this.props;
        const handleClick = () => {
            changeOpacity(!showed);
        };

        return <StyDiv onClick={handleClick}><Up showed={showed} /><Down showed={showed} /></StyDiv>;
    }
}