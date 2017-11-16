import { actionType } from '../constants';
//______________________________________________________________________________


export const addLabel = label => ({
    type: actionType.addLabel,
    id: label.id,
    title: label.title
});


export const removeLabel = label => ({
    type: actionType.deleteLabel,
    id: label.id
});
