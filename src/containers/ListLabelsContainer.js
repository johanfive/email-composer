// import dependencies
import React from 'react';
import {connect} from 'react-redux';
// import selector
import {getAllLabelIds} from '../reducers';
// import child Component that will receive the props
import ListLabels from '../components/ListLabels';
/*************************************/


const mapStateToProps = state => (
  {
    labelIds: getAllLabelIds(state)
  }
);


const ListLabelsContainer = connect(mapStateToProps)(ListLabels);
export default ListLabelsContainer;
