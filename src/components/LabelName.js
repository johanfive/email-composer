// import dependencies
import React from 'react';
/*************************************/


const LabelName = ({name, handleChange, handleClick, handleReturn}) => (
    <input
        value={name || "name"}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleReturn}
    />
);

export default LabelName;
