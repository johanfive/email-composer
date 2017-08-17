import React from 'react';
import {connect} from 'react-redux';
// import selector for "hydrating" props in mapStateToProps
import {getBitsByLabelId} from '../reducers';
// import all actions as action for readability
import * as action from '../actions/actions';


class Close extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // Delete all bits that belong to the label being deleted
    if (this.props.bitsByLabel) {
      this.props.bitsByLabel.map(id => this.props.dispatch(action.deleteBit(id)));
    }
    // This implementation is only possible because each ID is absolutely unique
    this.props.dispatch(action.deleteLabel(e.target.value));
    this.props.dispatch(action.deleteBit(e.target.value));
  }

  render() {
    return <button className="close-btn" onClick={this.handleClick} value={this.props.id} >x</button>;
  }
}

const mapStateToProps = (state, {id}) => {
  let bitsByLabel = getBitsByLabelId(state, id);
  if (bitsByLabel) {
    return ({
      bitsByLabel: bitsByLabel.map(bit => bit.id)
    });
  }
};

export default connect(mapStateToProps)(Close);
