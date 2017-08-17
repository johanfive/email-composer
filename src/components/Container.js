import React from 'react';
import {connect} from 'react-redux';
// import selector for "hydrating" props in mapStateToProps
import {getBitsByLabelId} from '../reducers';
// import all actions as action for readability
import * as action from '../actions/actions';

import Bit    from './Bit';
import Close  from './Close';


class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      labelName: props.label.name || "Category Name",
      bit: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick  = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, id) {
    this.setState( { [e.target.name]: e.target.value } );
    if (e.target.name === "labelName") {
      this.props.dispatch( action.updateLabel(id, e.target.value) );
    }
  }

  handleSubmit(e) {
    // if key pressed is Enter/Return
    if (e.keyCode == 13) {
      //regex.test to make sure the input start with a non-whitespace character
     // prevents empty Bits
      if (/^\S+/.test(this.state.bit)) {
        this.props.dispatch( action.addBit(this.state.bit, this.props.label.id) );
      }
      this.setState({bit:""});
    }
  }

  handleClick(e) {
    this.props.dispatch( action.pushString(e.target.value) );
    // TODO try document.execCommand('insertText', false, e.target.value);
  }

  render() {
    let listBits = this.props.bits.map(
      bit => {
        return <Bit key={bit.id} id={bit.id} text={bit.text} onClick={this.handleClick} />;
      }
    );
    return (
      <div className="container" >
        <Close id={this.props.label.id} />
        <input
          name="labelName"
          value={this.state.labelName}
          onChange={(e) => this.handleChange(e, this.props.label.id)}
        />
        <br />
        <input
          name="bit"
          value={this.state.bit}
          onKeyDown={this.handleSubmit}
          onChange={this.handleChange}
          placeholder="Type here"
        />
        <br />
        {listBits}
      </div>
    );
  }
}

const mapStateToProps = (state, {label}) => ({
  label: label,
  bits: getBitsByLabelId(state, label.id)
});

export default connect(mapStateToProps)(Container);
