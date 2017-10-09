// import dependencies
import React from 'react';
/*************************************/


const Log = ({handleClick, children}) => (
    <div>
        <button onClick={handleClick} >{children}</button>
    </div>
);

export default Log;
