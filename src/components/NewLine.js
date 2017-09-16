import React from 'react';
import style from "../styling/button.css";

const NewLine = (props) => (
  <button className={style.inControls} onClick={props.handleClick} value={'\n'} title="New Line" >
    &#9166;
  </button>
);

export default NewLine;

/*
&#10609;
&#11152;
&#8626;
&#8629;
&#9166;
*/
