import * as React from 'react';
import styled from 'styled-components';

interface PoemContentProps {
    content: string[];
}

const StyContentDiv = styled.div`
    p { margin: 8px 0; }
`;

export default function PoemContent(props: PoemContentProps) {
    const items = props.content.map((item, index) => <p key={index}>{item}</p>);
    return <StyContentDiv>{items}</StyContentDiv>;
}