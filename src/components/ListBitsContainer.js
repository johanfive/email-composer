// import dependencies
import React from 'react';
import {connect} from 'react-redux';
// import selector
import {getBitsByLabelId} from '../reducers';
// import child Component
import ListBits from './ListBits';
/*************************************/


const mapStateToProps = (state, {labelId}) => (
    {// TODO: create another selector that returns the IDs only
        bitIds: getBitsByLabelId(state, labelId).map(bit => bit.id)
    }
);

const ListBitsContainer = connect(mapStateToProps)(ListBits);
export default ListBitsContainer;
