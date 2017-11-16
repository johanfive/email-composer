import { actionType } from '../constants';
//______________________________________________________________________________


const bits = (state = [], action) => {
    switch (action.type) {

        case actionType.addBit:
        //The .some() function returns true if the callback returns true for any element.
        const idExist = state.some(id => id === action.bitId);
        if (idExist) {
            return state;
        } else {
            return state.concat(action.bitId);
        }

        case actionType.deleteBit:
            return state.filter(id => id !== action.bitId);

        default:
            return state;
    }
};


const BitsByLabelReducer = (state = {}, action) => {
    switch (action.type) {

        case 'CLEAR':
            return {};

        case actionType.addLabel:
            return {
                ...state,
                [action.id]: []
            };

        case actionType.deleteLabel:
            let copy = state;
            delete copy[action.id];
            return copy;

        // IMPORTANT! the action dispatched must contain both the labelId and the bitId
        case actionType.addBit:
        case actionType.deleteBit:
            return {
                ...state,
                [action.labelId]: bits(state[action.labelId], action)
            };

        default:
            return state;
    }
};

export default BitsByLabelReducer;
