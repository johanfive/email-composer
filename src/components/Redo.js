import React from 'react';
import style from "../styling/button.css";

const Redo = (props) => (
  <button className={style.inControls} onClick={props.handleClick} >Redo</button>
);

export default Redo;
