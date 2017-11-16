import { actionType } from '../constants';
//______________________________________________________________________________


export const editTitle = label => ({
    type: actionType.editTitle,
    id: label.id,
    title: label.title
});
