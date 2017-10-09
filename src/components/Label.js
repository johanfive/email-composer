// import dependencies
import React from 'react';
// import children components
import Close from './Close';
import LabelNameContainer from '../containers/LabelNameContainer';
import AddBitContainer from '../containers/AddBitContainer';
import ListBitsContainer from '../containers/ListBitsContainer';
// Styles
import style from '../styling/label.css';
/*************************************/


const Label = ({labelId}) => (
    <div className={style.label}>
        <div className={style.header}>
            <Close labelId={labelId} />
            <LabelNameContainer labelId={labelId} />
        </div>
        <AddBitContainer labelId={labelId} />
        <ListBitsContainer labelId={labelId} />
    </div>
);

export default Label;
