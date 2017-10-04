import React from 'react';
import {connect} from 'react-redux';
import {EditorState} from 'draft-js';
import * as action from '../actions/actions';
import Command from './Command';
import style from "../styling/button.css";
/*************************************/


const mapStateToProps = (state) => ({
    eState: state.editor.editorState,
    name: 'Redo'
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: (eState) => dispatch(
        action.updateEstate(EditorState.redo(eState))
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);
