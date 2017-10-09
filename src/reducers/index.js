import {combineReducers} from 'redux';
import LabelsReducer from './LabelsReducer';
import BitsReducer from './BitsReducer';
import EditorReducer from './EditorReducer';

import * as fromLabelsReducer from './LabelsReducer';
import * as fromBitsReducer from './BitsReducer';

export const reducer = combineReducers({
  labels: LabelsReducer,
  bits: BitsReducer,
  editor: EditorReducer
});


export const getAllLabels = (state) => {
  return fromLabelsReducer.getAllLabels(state.labels);
}

export const getAllLabelIds = (state) => {
  return fromLabelsReducer.getAllLabelIds(state.labels);
}

export const getNameOfLabel = (state, id) => {
  return fromLabelsReducer.getNameOfLabel(state.labels, id);
}

export const getBitsIdsByLabelId = (state, id) => {
  return fromBitsReducer.getBitsIdsByLabelId(state.bits, id);
}

export const getTextByBitId = (state, id) => {
  return fromBitsReducer.getTextByBitId(state.bits, id);
}
