import {combineReducers} from 'redux';

const initEmail = "";

const EmailReducer = (state = initEmail, action) => {
  switch (action.type) {
    case "PUSH_STRING":
      return state.concat(action.string);
      break;
    // TODO maybe think of a non-mutating solution at some point
    case "REPLACE_STRING":
      return action.string;
      break;
    case "CLEAR":
      return "";
      break;
    default:
      return state;
  }
};

export default EmailReducer;

//--- S E L E C T O R S ---//
export const getEmail = (state) => {
  return state;
};
