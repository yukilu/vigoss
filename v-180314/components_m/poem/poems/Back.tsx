import * as React from 'react';
import styled from 'styled-components';

const StyBackSpan = styled.span`
    padding: 5px;
    border-radius: 5px;
    border: 1px solid blue;
    color: blue;
    cursor: pointer;
`;

interface BackProps {
    toggleShow: () => void;
}

export default function Back(props: BackProps) {
    return (
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <StyBackSpan onClick={props.toggleShow}>Back to poets</StyBackSpan>
        </div>
    );
}