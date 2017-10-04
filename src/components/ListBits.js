// import dependencies
import React from 'react';
// import child Component
import BitContainer from './BitContainer';
// Styles
import style from '../styling/label.css';
/*************************************/


const ListBits = ({bitIds}) => {
    const listBits = bitIds.map(
        bitId => <BitContainer key={bitId} bitId={bitId} />
    );
    return (
        <div className={style.bitsList}>
            {listBits}
        </div>
    );
}

export default ListBits;
