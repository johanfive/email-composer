import {combineReducers} from 'redux';

const initBits = {
/*
    anId: {
        id: 'anId',
        text: 'someText',
        label: 'aLabelId'
    },
*/
};
const byId = (state = initBits, action) => {
  switch (action.type) {
    case "UPSERT_BIT":
      return {
        ...state,
        [action.id]: {id: action.id, text: action.text+' ', label: action.label}
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


const initAllIds = [/* 'anId', */];
const allIds = (state = initAllIds, action) => {
  switch (action.type) {
    case "UPSERT_BIT":
      let noDuplicate = state.filter(id => id !== action.id);
      return noDuplicate.concat(action.id);
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

export const getBitsIdsByLabelId = (state, id) => {
  let matches = getBitsByLabelId(state, id);
  return matches.map(bit => bit.id);
};

export const getTextByBitId = (state, id) => {
  return state.byId[id].text;
}
