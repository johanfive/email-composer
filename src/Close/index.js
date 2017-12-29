import React from 'react';
import { deleteLabel, deleteBit } from './firebaseActions';
import Button from './styledWrapper';
//______________________________________________________________________________



const Close = ({labelId, bitId}) => {
    if (labelId) {
        return <Button onClick={() => deleteLabel(labelId)}><span>&#10005;</span></Button>;
    }
    if (bitId) {
        return <Button onClick={(event) => {deleteBit(bitId); event.stopPropagation();}} bit ><span>&#10005;</span></Button>;
    }
};

export default Close;
