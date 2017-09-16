import React from 'react';
import Close from './Close';
import style from '../styling/bit.css';

const Bit = (props) => (
  <div className={style.wrapper} >
    <Close bitId={props.id} />
    <button className={style.content} onClick={props.onClick} value={props.text}>{props.text}</button>
  </div>
);

export default Bit;
