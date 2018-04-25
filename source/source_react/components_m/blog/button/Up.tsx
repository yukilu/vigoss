import * as React from 'react';
import styled from 'styled-components';

interface SvgUpProps {
    showed: boolean;
}

const SvgUp = styled.svg`
    width: 15px;
    height: 10px;
    position: absolute;
    left: 23px;
    top: ${(props: SvgUpProps) => (props.showed ? '29px' : '17px')};
    transition: top 0.5s ease;
`;

const UpPath = styled.path`
    width: 15px;
    height: 10px;
    stroke-width: 0;
    fill: rgb(97,218,251);
`;

interface UpProps {
    showed: boolean;
}

export function Up(props: UpProps) {
    const { showed } = props;
    return (
        <SvgUp showed={showed}>
            <UpPath d="M0,8 L7.5,0 L15,8 L13,10 L7.5,4 L2,10 L0,8" />
        </SvgUp>
    );
}