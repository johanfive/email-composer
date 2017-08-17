import {combineReducers} from 'redux';


const initLabels = {
  labelId1: {
    id: 'labelId1',
    name: 'Greetings'
  },
  labelId2: {
    id: 'labelId2',
    name: 'Buh-byes'
  }
};
const byId = (state = initLabels, action) => {
  switch (action.type) {
    case "ADD_LABEL":
    case "UPDATE_LABEL":
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


const initAllIds = ['labelId1', 'labelId2'];
const allIds = (state = initAllIds, action) => {
  switch (action.type) {
    case "ADD_LABEL":
      return state.concat(action.id);
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
