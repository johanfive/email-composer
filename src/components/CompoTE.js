import React from 'react';
import {Editor} from 'draft-js';
import style from '../styling/main.css';
/*************************************/


const CompoTE = ({editorState, handleChange}) => (
    <div className={style.editor}>
        <Editor
            editorState={editorState}
            onChange={handleChange}
            placeholder="Compose email here"
        />
    </div>
);

export default CompoTE;
