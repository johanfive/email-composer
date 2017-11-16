import { actionType } from '../constants';
//______________________________________________________________________________


export const addBit = (bit) => ({
    type: actionType.addBit,
    bitId: bit.id,
    text: bit.text,
    labelId: bit.label
});

export const removeBit = (bit) => ({
    type: actionType.deleteBit,
    bitId: bit.id,
    labelId: bit.label
});
