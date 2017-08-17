import React from 'react';
import {connect} from 'react-redux';
// import all actions as action for readability
import * as action from '../actions/actions';


const Close = (props) => <button onClick={props.clear} >Clear</button>;

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(action.clear())
});

export default connect(null, mapDispatchToProps)(Close);
