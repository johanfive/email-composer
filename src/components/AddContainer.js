import React from 'react';
import {connect} from 'react-redux';
// import all actions as action for readability
import * as action from '../actions/actions';


const AddContainer = (props) => <button className="add-btn" onClick={props.add} >+</button>;

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(action.addLabel())
});

export default connect(null, mapDispatchToProps)(AddContainer);
