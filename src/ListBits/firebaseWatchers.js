import { db } from '../firebase';
import { addBit, removeBit } from './actions';
//______________________________________________________________________________


export function watchBitsEvents(dispatch, labelId) {
    //  watch for    B I T    A D D E D
    db.child(`BitsByLabel/${labelId}`).on('child_added', snap => {
        const bitId = snap.key;
        db.child(`Bits/${bitId}`).once('value', snap => {
            dispatch(addBit(snap.val()));
        });
    });
    //  watch for    B I T    R E M O V E D
    db.child(`BitsByLabel/${labelId}`).on('child_removed', snap => {
        // Have to build out the bit object from the arg labelId + the snap.key
        // because snap.val() only returns 'true'. See the FB state tree below.
        const bit = {
            id: snap.key,
            label: labelId
        };
        dispatch(removeBit(bit));
    });
};

/*
BitsByLabel: {
        labelId: {
                bitId1: true,
                bitId2: true,
                ...
        },
        ...
}
*/
