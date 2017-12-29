import React from 'react';
import CompoTE from '../CompoTE/';
import EditorButtons from '../EditorButtons/';
import styled from 'styled-components';
//______________________________________________________________________________


const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 25%;
    overflow: hidden;
    border-bottom: 1px solid black;
    background: white;

    @media only screen and (min-width: 850px) {
        left: auto;
        right: 0;
        width: 33%;
        height: 100%;
        border: 0;
        border-left: 1px solid black;
    }
`;

const EditorWrapper = () => (
    <Wrapper>
        <EditorButtons />
        <CompoTE />
    </Wrapper>
);

export default EditorWrapper;
