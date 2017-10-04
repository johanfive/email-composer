
 // Separating all action creators for documentation purposes
//  It's just easier to find all already existing actions

export const logout = () => ({type: "LOGOUT"});

export const updateEstate = (eState) => (
  {
    type: "UPDATE_EDITOR",
    editorState: eState
  }
);


//--- L A B E L related actions ---//
export const upsertLabel = (id, name) => (
  {
    type: "UPSERT_LABEL",
    id: id,
    name: name
  }
);

export const deleteLabel = id => (
  {
    type: "DELETE_LABEL",
    id: id
  }
);


//--- B I T related actions ---//
export const upsertBit = (id, text, label) => (
  {
    type: "UPSERT_BIT",
    id: id,
    text: text,
    label: label
  }
);

export const deleteBit = id => (
  {
    type: "DELETE_BIT",
    id: id
  }
);


 // Staying away from syntactic sugar like shorthand notation to make code very obvious
// "Forced" indentation to emphasize that action creators return an object
