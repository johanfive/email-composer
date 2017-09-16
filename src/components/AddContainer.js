import React from 'react';
import {connect} from 'react-redux';
// import all actions as action for readability
import * as fbAction from '../actions/fbActions';
import style from "../styling/button.css";


const AddContainer = (props) => <button className={style.addContainer} onClick={props.add} >
  &#65291;
</button>;

const mapDispatchToProps = () => ({
  add: () => fbAction.addLabel()
});

export default connect(null, mapDispatchToProps)(AddContainer);

/*
&#65122;
&#43;
&#65291;
*/
