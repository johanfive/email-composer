import React from 'react';
import {Editor} from 'draft-js';

const CompoTE = ({editorState, handleChange}) => (
    <Editor
        editorState={editorState}
        onChange={handleChange}
        placeholder="Compose email here"
    />
);

export default CompoTE;
