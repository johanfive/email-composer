import { db } from '../firebase';
import { editTitle } from './actions';
//______________________________________________________________________________


export const watchTitleChanges = (dispatch, labelId) => {
    db.child(`Labels/${labelId}`).on('value', snap => {
        if (snap.val()) {
            dispatch(editTitle(snap.val()));
        }
    });
};
