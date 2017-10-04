import React from 'react';
// import all actions as action for readability
import * as fbAction from '../actions/fbActions';
import style from "../styling/button.css";
/*************************************/


const AddLabel = () => (
    <button
        className={style.addLabel}
        onClick={() => fbAction.addLabel()}
    >
        &#65291;
    </button>
);

export default AddLabel;

/*
&#65122;
&#43;
&#65291;
*/
