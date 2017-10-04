import React from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/actions';
import CompoTE from './CompoTE';


const mapStateToProps = (state) => ({
  editorState: state.editor.editorState
});


const mapDispatchToProps = dispatch => ({
  handleChange: (editorState) => dispatch(action.updateEstate(editorState))
});


const ConnectedCompoTE = connect(mapStateToProps, mapDispatchToProps)(CompoTE);
export default ConnectedCompoTE;
