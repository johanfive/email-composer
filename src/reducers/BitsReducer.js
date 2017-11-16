import { actionType } from '../constants';
//______________________________________________________________________________


const BitsReducer = (state = {}, action) => {
    switch (action.type) {

        case 'CLEAR':
            return {};

        case actionType.addBit:
            return {
                ...state,
                [action.bitId]: {id: action.bitId, text: `${action.text} `, label: action.labelId}
            };

        case actionType.deleteBit:
            let copy = state;
            delete copy[action.bitId];
            return copy;

        default:
            return state;
    }
};


export default BitsReducer;
