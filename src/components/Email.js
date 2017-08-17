import React from 'react';
import {connect} from 'react-redux';
// import selector for "hydrating" props in mapStateToProps
import {getEmail} from '../reducers';
// import all actions as action for readability
import * as action from '../actions/actions';

import Clear  from './Clear';
import Copy   from './Copy';

// TODO Look into debounce functions

class Email extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatch( action.replaceString(e.target.value) );
  }

  render() {
    return (
      <div id="viewer">
        <textarea id="outcome" onChange={this.handleChange} value={this.props.email} >
        </textarea>
        <Copy />
        <Clear />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({email: getEmail(state)});

export default connect(mapStateToProps)(Email);
