import { actionType, editorButtonsCommands } from '../constants';
import { EditorState, ContentState, Modifier } from 'draft-js';
import store from '../store';
//______________________________________________________________________________


export const updateEditor = (cmd) => {
    // Get current state of the editor
    const eState = store.getState().editor.editorState;
    let newEstate;
    // Toggle the values of cmd in order to dispatch the appropriate action
    switch (cmd) {
        //  N E W    L I N E
        case editorButtonsCommands.newLine:
            const contentState = eState.getCurrentContent();
            const selectionState = eState.getSelection();
            const newContentState = Modifier.splitBlock(contentState, selectionState);
            newEstate = EditorState.push(eState, newContentState, 'split-block');
            const newEstateWithSelection = EditorState.forceSelection(newEstate, newEstate.getSelection());
            return {
                type: actionType.updateEditor,
                editorState: newEstateWithSelection
            };
        //  C L E A R
        case editorButtonsCommands.clear:
            newEstate = EditorState.moveFocusToEnd(
                EditorState.push(eState, ContentState.createFromText(''))
            );
            return {
                type: actionType.updateEditor,
                editorState: newEstate
            };
        //  U N D O
        case editorButtonsCommands.undo:
            newEstate = EditorState.undo(eState);
            return {
                type: actionType.updateEditor,
                editorState: newEstate
            };
        //  R E D O
        case editorButtonsCommands.redo:
            newEstate = EditorState.redo(eState);
            return {
                type: actionType.updateEditor,
                editorState: newEstate
            };

        default:
            return {
                type: '|--> DO NOTHING <--|',
                but: 'realistically, this should never be triggered'
            };
    }
};
