import React from 'react';
import { connect } from 'react-redux';
import {Editor} from 'draft-js';
import { updateEditor } from './actions';
import 'draft-js/dist/Draft.css';
import Wrapper from './styledWrapper';
//______________________________________________________________________________



// C O M P O N E N T
const CompoTE = ({editorState, onChange}) => (
    <Wrapper>
        <Editor
            editorState={editorState}
            onChange={onChange}
            placeholder="Compose email here"
        />
    </Wrapper>
);


// C O N T A I N E R
const mapStateToProps = (state) => ({
    editorState: state.editor.editorState
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (eState) => dispatch(updateEditor(eState))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompoTE);
