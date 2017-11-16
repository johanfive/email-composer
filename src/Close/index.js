import React from 'react';
import { deleteLabel, deleteBit } from './firebaseActions';
//______________________________________________________________________________


const Close = ({labelId, bitId}) => {
    if (labelId) {
        return <button onClick={() => deleteLabel(labelId)}>x</button>;
    }
    if (bitId) {
        return <button onClick={() => deleteBit(bitId)}>x</button>;
    }
};

export default Close;
