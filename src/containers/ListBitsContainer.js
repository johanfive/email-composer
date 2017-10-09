// import dependencies
import React from 'react';
import {connect} from 'react-redux';
// import selector
import {getBitsIdsByLabelId} from '../reducers';
// import child Component
import ListBits from '../components/ListBits';
/*************************************/


const mapStateToProps = (state, {labelId}) => (
    {
        bitIds: getBitsIdsByLabelId(state, labelId)
    }
);

const ListBitsContainer = connect(mapStateToProps)(ListBits);
export default ListBitsContainer;
