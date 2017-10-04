import React from 'react';
import {connect} from 'react-redux';
import {EditorState, ContentState} from 'draft-js';
import * as action from '../actions/actions';
import Command from './Command';
import style from '../styling/button.css';
/*************************************/


const mapStateToProps = (state) => ({
    eState: state.editor.editorState,
    name: 'Clear'
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: (eState) => dispatch(
        action.updateEstate(
            EditorState.moveFocusToEnd(
                EditorState.push(eState, ContentState.createFromText(''))
            )
        )
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);
