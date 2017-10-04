// import dependencies
import React from 'react';
// Styles
import style from '../styling/label.css';
/*************************************/


const AddBit = ({text, handleChange, handleSubmit}) => (
  <input
    className={style.addOneBit}
    value={text}
    onChange={handleChange}
    onClick={(e) => e.target.select()}
    onKeyDown={handleSubmit}
    placeholder="type here and press enter"
  />
);

export default AddBit;
