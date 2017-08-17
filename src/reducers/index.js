import {combineReducers} from 'redux';
import LabelsReducer from './LabelsReducer';
import EmailReducer from './EmailReducer';
import BitsReducer from './BitsReducer';

import * as fromLabelsReducer from './LabelsReducer';
import * as fromEmailReducer from './EmailReducer';
import * as fromBitsReducer from './BitsReducer';

export const reducer = combineReducers({
  labels: LabelsReducer,
  email: EmailReducer,
  bits: BitsReducer
});


export const getEmail = (state) => {
  return fromEmailReducer.getEmail(state.email);
}

export const getAllLabels = (state) => {
  return fromLabelsReducer.getAllLabels(state.labels);
}

export const getBitsByLabelId = (state, id) => {
  return fromBitsReducer.getBitsByLabelId(state.bits, id);
}
