
 // Separating all action creators for documentation purposes
//  It's just easier to find all already existing actions


//--- L A B E L related actions ---//
let labelId = 0;

export const addLabel = () => (
  {
    type : 'ADD_LABEL',
    id: 'label'+labelId++
  }
);

export const updateLabel = (id, name) => (
  {
    type: "UPDATE_LABEL",
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
let bitId = 0;

export const addBit = (text, label) => (
  {
    type: "ADD_BIT",
    id: 'bit'+bitId++,
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


//--- E M A I L (textarea) related actions ---//
export const clear = () => ({type : 'CLEAR'});

export const replaceString = string => (
  {
    type: "REPLACE_STRING",
    string: string
  }
);

export const pushString = string => (
  {
    type: "PUSH_STRING",
    string: string
  }
);

 // Staying away from syntactic sugar like shorthand notation to make code very obvious
// "Forced" indentation to emphasize that action creators return an object
