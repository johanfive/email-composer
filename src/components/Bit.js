// import dependencies
import React from 'react';
// import child Component
import Close from './Close';
// Styles
import style from '../styling/bit.css';
/*************************************/


// TODO: Is there a way to avoid having the editorState prop do a back and forth?

const Bit = ({text, bitId, handleClick, eState}) => (
    <div className={style.wrapper}>
        <button
          className={style.content}
          type="button"
          onClick={(e) => {handleClick(e, eState)}}
          value={text}
        >
            {text}
        </button>
        <Close bitId={bitId} />
    </div>
);

export default Bit;
