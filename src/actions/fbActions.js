import {database} from "../firebase/firebaseStuff";

const db = database.ref();
// const userID = firebase.auth().currentUser.uid;
const userRef = db.child('users').child('userID');



//--- L A B E L related actions ---//
export const addLabel = () => {
  let labelKey = userRef.child('Labels').push().key;

  let newLabel = {
    id: labelKey,
    name: ""
  };

  let data = {
    [`Labels/${labelKey}`]: newLabel
  };

  userRef.update(data);
};



export const updateLabel = (id, name) => {
  let data = {
    [`Labels/${id}/name`]: name
  };
  userRef.update(data);
};



export const deleteLabel = id => {
  userRef.child('Labels').child(id).once('value', labelSnapShot => {
    if (labelSnapShot) {
      let label = labelSnapShot.val();

      let dataToRemove = {
        [`Labels/${label.id}`]: null
      };

      if (label.bitsList){
        let associatedBitsKeys = Object.keys(label.bitsList);
        associatedBitsKeys.forEach(bitKey => {
          dataToRemove[`Bits/${bitKey}`] = null;
        });
      };

      userRef.update(dataToRemove);
    }
  });
};



//--- B I T related actions ---//
export const addBit = (text, label) => {
  let bitKey = userRef.child('Bits').push().key;

  let newBit = {
    id: bitKey,
    text: text,
    label: label
  };

  let data = {
    [`Bits/${bitKey}`]: newBit,
    [`Labels/${label}/bitsList/${bitKey}`]: true
  };

  userRef.update(data);
};



export const deleteBit = id => {
  userRef.child('Bits').child(id).once('value', bitSnapShot => {
    if (bitSnapShot) {
      let bit = bitSnapShot.val();
      let parentLabelKey = bit.label;

      let dataToRemove = {
        [`Bits/${bit.id}`]: null,
        [`Labels/${parentLabelKey}/bitsList/${id}`]: null
      };

      userRef.update(dataToRemove);
    }
  });
};
