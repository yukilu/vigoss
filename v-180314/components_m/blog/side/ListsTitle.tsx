import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

interface ListsTitleProps {
    listsTitle: string;
}

const StyDiv = styled.div`
    height: 40px;
    line-height: 40px;
    color: rgb(109,109,109);
    padding-left: 25px;
`;

export default function ListsTitle (props: ListsTitleProps) {
    return <StyDiv>{props.listsTitle}</StyDiv>;
}