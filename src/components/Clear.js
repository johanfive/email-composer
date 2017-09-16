import React from 'react';
import style from "../styling/button.css";

const Clear = (props) => (
  <button className={style.inControls} onClick={props.handleClick} value={''} >Clear</button>
);

export default Clear;
