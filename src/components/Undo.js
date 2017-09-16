import React from 'react';
import style from "../styling/button.css";

const Undo = (props) => (
  <button className={style.inControls} onClick={props.handleClick} >Undo</button>
);

export default Undo;
