import React from 'react';
import {connect} from 'react-redux';
import {EditorState, RichUtils} from 'draft-js';
import * as action from '../actions/actions';
import Command from '../components/Command';
/*************************************/


// TODO change the insert of a soft new line to the creation of a new block
// otherwise navigation inside the editor with the keyboard arrows has terrible behavior

const mapStateToProps = (state) => ({
    eState: state.editor.editorState,
    name: "\u23CE"
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: (eState) => dispatch(
        action.updateEstate(RichUtils.insertSoftNewline(eState))
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Command);

/*
&#10609;
&#11152;
&#8626;
&#8629;
&#9166;
*/
