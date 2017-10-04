import {EditorState} from 'draft-js';


const initEditor = {
  editorState: EditorState.createEmpty()
};


const EditorReducer = (state = initEditor, action) => {
  switch (action.type) {
    case "UPDATE_EDITOR":
      return {
        ...state,
        editorState: action.editorState
      };
      break;
    default:
      return state;
  }
}

export default EditorReducer;
