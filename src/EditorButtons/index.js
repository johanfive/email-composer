import React from 'react';
import { editorButtonsCommands } from '../constants';
import EditorButton from './EditorButton';
import styled from 'styled-components';
//______________________________________________________________________________


const Wrapper = styled.div`
    height: 2em;
    border-bottom: 1px solid black;
    button:last-child {
        border: 0;
    }
`;

const EditorButtons = () => (
    <Wrapper>
        <EditorButton cmd={editorButtonsCommands.newLine}>&#8629;</EditorButton>
        <EditorButton cmd={editorButtonsCommands.clear}>Clear</EditorButton>
        <EditorButton cmd={editorButtonsCommands.undo}>Undo</EditorButton>
        <EditorButton cmd={editorButtonsCommands.redo}>Redo</EditorButton>
    </Wrapper>
);

export default EditorButtons;
