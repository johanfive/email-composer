// import dependencies
import React from 'react';
/*************************************/


const LabelName = ({name, handleChange}) => (
    <input
        value={name || "name"}
        onChange={handleChange}
        onClick={(e) => e.target.select()}
        onKeyDown={(e) => {if (e.keyCode == 13) {e.target.blur()}}}
    />
);

export default LabelName;
