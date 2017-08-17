import {combineReducers} from 'redux';

const initBits = {
  bitId1: {
    id: 'bitId1',
    text: 'Hello',
    label: 'labelId1'
  },
  bitId2: {
    id: 'bitId2',
    text: 'Hi',
    label: 'labelId1'
  }
};
const byId = (state = initBits, action) => {
  switch (action.type) {
    case "ADD_BIT":
      return {
        ...state,
        [action.id]: {id: action.id, text: action.text, label: action.label}
      };
      break;
    case "DELETE_BIT":
      let copy = state;
      delete(copy[action.id]);
      return copy;
      break;
    default:
      return state;
  }
};


const initAllIds = ['bitId1', 'bitId2'];
const allIds = (state = initAllIds, action) => {
  switch (action.type) {
    case "ADD_BIT":
      return state.concat(action.id);
      break;
    case "DELETE_BIT":
      return state.filter(id => id !== action.id);
      break;
    default:
      return state;
  }
};


const BitsReducer = combineReducers({
  byId,
  allIds
});
export default BitsReducer;


//--- S E L E C T O R S ---//
export const getAllBits = (state) => {
  return state.allIds.map(id => state.byId[id]);
};

export const getBitsByLabelId = (state, id) => {
  let allBits = getAllBits(state);
  return allBits.filter(bit => bit.label == id);
};
