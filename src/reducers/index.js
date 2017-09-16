import {combineReducers} from 'redux';
import LabelsReducer from './LabelsReducer';
import BitsReducer from './BitsReducer';

import * as fromLabelsReducer from './LabelsReducer';
import * as fromBitsReducer from './BitsReducer';

export const reducer = combineReducers({
  labels: LabelsReducer,
  bits: BitsReducer
});


export const getAllLabels = (state) => {
  return fromLabelsReducer.getAllLabels(state.labels);
}

export const getBitsByLabelId = (state, id) => {
  return fromBitsReducer.getBitsByLabelId(state.bits, id);
}
