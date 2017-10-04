import React from 'react';
import style from "../styling/button.css";
/*************************************/


const Command = ({name, eState, handleClick}) => (
    <button
        className={style.inControls}
        onClick={() => handleClick(eState)}
    >
        {name}
    </button>
);

export default Command;
