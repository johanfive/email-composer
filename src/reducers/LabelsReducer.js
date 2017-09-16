import {combineReducers} from 'redux';


const initLabels = {};
const byId = (state = initLabels, action) => {
  switch (action.type) {
    case "UPSERT_LABEL":
//  case "ADD_LABEL":
//  case "UPDATE_LABEL":
      return {
        ...state,
        [action.id]: {id: action.id, name: action.name}
      };
      break;
    case "DELETE_LABEL":
      let copy = state;
      delete(copy[action.id]);
      return copy;
      break;
    default:
      return state;
  }
};


const initAllIds = [];
const allIds = (state = initAllIds, action) => {
  switch (action.type) {
    case "UPSERT_LABEL":
      //The .some() function returns true if the callback returns true for any element.
      let idExist = state.some(id => id == action.id);
      if (idExist) {
        return state;
      } else {
        return state.concat(action.id);
      }
      break;
    case "DELETE_LABEL":
      return state.filter(id => id !== action.id);
      break;
    default:
      return state;
  }
};


const LabelsReducer = combineReducers({
  byId,
  allIds
});
export default LabelsReducer;


//--- S E L E C T O R S ---//
export const getAllLabels = (state) => {
  return state.allIds.map(id => state.byId[id]);
};
