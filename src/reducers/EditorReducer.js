import { actionType } from '../constants';
import { EditorState } from 'draft-js';
//______________________________________________________________________________


const initEditor = {
    editorState: EditorState.createEmpty()
};

const EditorReducer = (state = initEditor, action) => {
    switch (action.type) {
        case actionType.updateEditor:
        return {
            editorState: action.editorState
        };
        default:
        return state;
    }
};

export default EditorReducer;
