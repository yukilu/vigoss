import * as React from 'react';
import styled from 'styled-components';

interface SvgDownProps {
    showed: boolean;
}

const SvgDown = styled.svg`
    width: 15px;
    height: 10px;
    position: absolute;
    left: 23px;
    bottom: ${(props: SvgDownProps) => (props.showed ? '29px' : '17px')};
    transition: bottom 0.5s ease;
`;

const DownPath = styled.path`
    width: 15px;
    height: 10px;
    stroke-width: 0;
    fill: rgb(97,218,251);
`;

interface UpProps {
    showed: boolean;
}

export function Down(props: UpProps) {
    const { showed } = props;
    return (
        <SvgDown showed={showed}>
            <DownPath d="M2,0 L7.5,6 L13,0 L15,2 L7.5,10 L0,2 L2,0" />
        </SvgDown>
    );
}