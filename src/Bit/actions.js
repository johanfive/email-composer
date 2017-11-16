import { actionType } from '../constants';
import { EditorState, Modifier } from 'draft-js';
import store from '../store';
//______________________________________________________________________________


export const updateEditor = (text) => {
    // Get current state of the editor
    const eState = store.getState().editor.editorState;

    const contentState = eState.getCurrentContent();
    const selection = eState.getSelection();
    const newContentState = Modifier.replaceText(contentState, selection, text);
    const newEstate = EditorState.push(eState, newContentState, 'insert-fragment');
    const outcome = EditorState.forceSelection(newEstate, newEstate.getSelection());

    return {
        type: actionType.updateEditor,
        editorState: outcome
    }
};
