import { combineReducers } from 'redux';
import BitsByLabelReducer from './BitsByLabelReducer';
import LabelsReducer from './LabelsReducer';
import BitsReducer from './BitsReducer';
import EditorReducer from './EditorReducer';
//______________________________________________________________________________


const rootReducer = combineReducers({
    bitsByLabel: BitsByLabelReducer,
    labels: LabelsReducer,
    bits: BitsReducer,
    editor: EditorReducer
});

export default rootReducer;
