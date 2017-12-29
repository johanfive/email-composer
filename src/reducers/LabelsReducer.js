import { combineReducers } from 'redux';
import { actionType } from '../constants';
//______________________________________________________________________________


const byId = (state = {}, action) => {
    switch (action.type) {

        case 'CLEAR':
            return {};

        case actionType.addLabel:
        case actionType.editTitle:
            return {
                ...state,
                [action.id]: {id: action.id, title: action.title}
            };

        case actionType.deleteLabel:
            let copy = state;
            delete copy[action.id];
            return copy;

        default:
            return state;
    }
};


const populateAllIds = ['demo'];

const allIds = (state = [], action) => {
    switch (action.type) {

        case 'CLEAR':
            return [];

        case actionType.addLabel:
            //The .some() function returns true if the callback returns true for any element.
            const idExist = state.some(id => id === action.id);
            if (idExist) {
                return state;
            } else {
                return [...state, action.id]; // or state.concat(action.id);
            }

        case actionType.deleteLabel:
            return state.filter(id => id !== action.id);

        default:
            return state;
    }
};


const LabelsReducer = combineReducers({byId, allIds});
export default LabelsReducer;
