// import dependencies
import React from 'react';
// import children components
import Close from './Close';
import LabelNameContainer from './LabelNameContainer';
import AddBitContainer from './AddBitContainer';
import ListBitsContainer from './ListBitsContainer';
// Styles
import style from '../styling/label.css';
/*************************************/


const Label = ({labelId}) => {console.log("label"); return (
    <div className={style.label}>
        <div className={style.header}>
            <Close labelId={labelId} />
            <LabelNameContainer labelId={labelId} />
        </div>
        <AddBitContainer labelId={labelId} />
        <ListBitsContainer labelId={labelId} />
    </div>
)};

export default Label;
