import { db } from '../firebase';
import { addLabel, removeLabel } from './actions';
//______________________________________________________________________________


// Setup events listeners for the Labels node in the firebase DB
export const watchLabelsEventsThen = (dispatch) => {

    db.child('Labels').on('child_added', snap => {
        dispatch(addLabel(snap.val()));
    });

    db.child('Labels').on('child_removed', snap => {
        dispatch(removeLabel(snap.val()));
    });

};
