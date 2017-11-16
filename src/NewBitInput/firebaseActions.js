import { db } from '../firebase';
//______________________________________________________________________________


export const createNewBit = (text, labelId) => {
    const key = db.child('Bits').push().key;
    const newBit = {id: key, text: text, label: labelId};
    const data = {
        [`Bits/${key}`]: newBit,
        [`BitsByLabel/${labelId}/${key}`]: true
    };
    db.update(data);
};
