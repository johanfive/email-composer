// import { createSelector } from 'reselect';
//______________________________________________________________________________
// TODO uninstal reselect from this project.
// Memoization is unnecessary when only selecting a portion of the state
// because connect() already does a shallow check of props
// Only makes sense when "calculating" an outcome
// using multiple "criteria" pulled from different parts of the state



//  L A B E L S    R E L A T E D    S E L E C T O R S
export const getLabelsIds = state => state.labels.allIds;

export const getLabelTitle = (state, id) => state.labels.byId[id].title;



//  B I T S    R E L A T E D    S E L E C T O R S
export const getBitsIdsByLabel = (state, id) => state.bitsByLabel[id];

export const getBitText = (state, id) => state.bits[id].text;
