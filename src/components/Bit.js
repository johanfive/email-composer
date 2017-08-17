import React from 'react';
import Close from './Close';

const Bit = (props) => (
  <div className="bit" >
    <button onClick={props.onClick} value={props.text}>{props.text}</button>
    <Close id={props.id} />
  </div>
);

export default Bit;
