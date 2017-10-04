// import dependencies
import React from 'react';
import {connect} from 'react-redux';
// import selector
import {getNameOfLabel} from '../reducers';
// import all actions as action for readability
import * as fbAction from '../actions/fbActions'; // updateLabel action
// import child Component that will receive the props
import LabelName from './LabelName';
/*************************************/


const mapStateToProps = (state, {labelId}) => (
    {
        name: getNameOfLabel(state, labelId)
    }
);

const mapDispatchToProps = (dispatch, {labelId}) => (
  {
      handleChange: (e) => fbAction.updateLabel(labelId, e.target.value)
  }
);

const LabelNameContainer = connect(mapStateToProps, mapDispatchToProps)(LabelName);
export default LabelNameContainer;
