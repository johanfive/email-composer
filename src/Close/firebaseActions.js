import { db } from '../firebase';
//______________________________________________________________________________


export const deleteLabel = (key) => {
    // remove all the bits linked to that label in FB
    db.child(`BitsByLabel/${key}`).once('value', snap => {
        let data = {};
        const bitsList = snap.val();
        if (bitsList){
            const associatedBitsKeys = Object.keys(bitsList);
            associatedBitsKeys.forEach(bitKey => {
                data[`Bits/${bitKey}`] = null;
            });
        };
        data[`BitsByLabel/${key}`] = null;
        data[`Labels/${key}`] = null;
        db.update(data);
    });
};


export const deleteBit = (id) => {
    db.child(`Bits/${id}/label`).once('value', snap => {
        const parentLabelKey = snap.val();
        const data = {
            [`Bits/${id}`]: null,
            [`BitsByLabel/${parentLabelKey}/${id}`]: null
        };
        db.update(data);
    });
};
