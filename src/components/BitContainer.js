// import dependencies
import React from 'react';
import {connect} from 'react-redux';
import {EditorState, Modifier} from 'draft-js';
import * as action from '../actions/actions';
// import selector
import {getTextByBitId} from '../reducers';
// import child Component
import Bit from './Bit';
/*************************************/


// Utility function used in mapDispatchToProps
const createNewEstateWith = (text, eState) => {
    const contentState = eState.getCurrentContent();
    const selection = eState.getSelection();
    const newContentState = Modifier.replaceText(contentState, selection, text);
    const newEstate = EditorState.push(eState, newContentState, 'insert-fragment');
    return EditorState.forceSelection(newEstate, newEstate.getSelection());
};


const mapStateToProps = (state, {bitId}) => ({
    eState: state.editor.editorState,
    text: getTextByBitId(state, bitId)
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: (e, eState) => {
        dispatch(action.updateEstate(
            createNewEstateWith(e.target.value, eState))
        )
    }
});

const BitContainer = connect(mapStateToProps, mapDispatchToProps)(Bit);
export default BitContainer;
