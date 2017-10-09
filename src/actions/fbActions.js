import {database, auth} from "../firebase/firebaseStuff";

const db = database.ref();
let userRef;

auth.onAuthStateChanged(user => {
    if (user) {
        const uid = user.uid;
        userRef = db.child('users').child(uid);
    } else {
        userRef = null;
    }
});


//--- L A B E L related actions ---//
export const addLabel = () => {
    if (userRef) {
        const labelKey = userRef.child('Labels').push().key;

        const newLabel = {
          id: labelKey,
          name: ""
        };

        const data = {
          [`Labels/${labelKey}`]: newLabel
        };

        userRef.update(data);
        // this is a Promise but there's no need to return it
        // since listeners are set up in fbListeners.js.
        // If fulfilled, the listeners will get triggered, otherwise nothing happens
    }
};



export const updateLabel = (id, name) => {
  const data = {
    [`Labels/${id}/name`]: name
  };
  userRef.update(data);
};



export const deleteLabel = id => {
  userRef.child('Labels').child(id).once('value', labelSnapShot => {
    if (labelSnapShot) {
      const label = labelSnapShot.val();

      const dataToRemove = {
        [`Labels/${label.id}`]: null
      };

      if (label.bitsList){
        const associatedBitsKeys = Object.keys(label.bitsList);
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
  const bitKey = userRef.child('Bits').push().key;

  const newBit = {
    id: bitKey,
    text: text,
    label: label
  };

  const data = {
    [`Bits/${bitKey}`]: newBit,
    [`Labels/${label}/bitsList/${bitKey}`]: true
  };

  userRef.update(data);
};



export const deleteBit = id => {
  userRef.child('Bits').child(id).once('value', bitSnapShot => {
    if (bitSnapShot) {
      const bit = bitSnapShot.val();
      const parentLabelKey = bit.label;

      const dataToRemove = {
        [`Bits/${bit.id}`]: null,
        [`Labels/${parentLabelKey}/bitsList/${id}`]: null
      };

      userRef.update(dataToRemove);
    }
  });
};
