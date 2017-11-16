import { actionType } from '../constants';
//______________________________________________________________________________


export const updateEditor = (eState) => ({
    type: actionType.updateEditor,
    editorState: eState
});
