import React from 'react';
import { editorButtonsCommands } from '../constants';
import EditorButton from './EditorButton';
//______________________________________________________________________________


const EditorButtons = () => (
    <div>
        <EditorButton cmd={editorButtonsCommands.newLine}>New Line</EditorButton>
        <EditorButton cmd={editorButtonsCommands.clear}>Clear</EditorButton>
        <EditorButton cmd={editorButtonsCommands.undo}>Undo</EditorButton>
        <EditorButton cmd={editorButtonsCommands.redo}>Redo</EditorButton>
    </div>
);

export default EditorButtons;
