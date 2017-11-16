import { db } from '../firebase';
//______________________________________________________________________________


export const createNewLabel = () => {
    const key = db.child('Labels').push().key;
    const newLabel = {id: key, title: 'Category'};
    const data = {
        [`Labels/${key}`]: newLabel
    };
    db.update(data);
};
