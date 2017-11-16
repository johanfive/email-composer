import React from 'react';
import { connect } from 'react-redux';
import {Editor} from 'draft-js';
import { updateEditor } from './actions';
import 'draft-js/dist/Draft.css';
//______________________________________________________________________________


// C O M P O N E N T
const CompoTE = ({editorState, onChange}) => (
    <Editor
        editorState={editorState}
        onChange={onChange}
        placeholder="Compose email here"
    />
);


// C O N T A I N E R
const mapStateToProps = (state) => ({
    editorState: state.editor.editorState
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (eState) => dispatch(updateEditor(eState))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompoTE);

/*
&#10609;
&#11152;
&#8626;
&#8629;
&#9166;
*/
