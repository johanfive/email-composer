// import dependencies
import React from 'react';
import {connect} from 'react-redux';
// import selector for "hydrating" props in mapStateToProps
import {getBitsByLabelId} from '../reducers';
// import all actions as action for readability
import * as fbAction from '../actions/fbActions';
// import components
import Bit    from './Bit';
import Close  from './Close';
import style from '../styling/label.css';


class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bit: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, id) {
    if (e.target.name === "labelName") {
      fbAction.updateLabel(id, e.target.value);
    } else {this.setState( { [e.target.name]: e.target.value } );}
  }

  handleSubmit(e) {
    // if key pressed is Enter/Return
    if (e.keyCode == 13) {
      //regex.test to make sure the input starts with a non-whitespace character
     // prevents empty Bits
      if (/^\S+/.test(this.state.bit)) {
        fbAction.addBit(this.state.bit, this.props.label.id);
      }
      this.setState({bit:""});
      e.target.blur(); // Maybe not such a good UX. TODO Delete?
    }
  }

  render() {
    let listBits = this.props.bits.map(
      bit => {
        return <Bit key={bit.id} id={bit.id} text={bit.text} onClick={this.props.handleClick} />;
      }
    );
    return (
      <div className={style.label} >
        <div className={style.header}>
          <Close labelId={this.props.label.id} />
          <input
            name="labelName"
            onClick={(e) => e.target.select()}
            value={this.props.label.name || "Category name"}
            onKeyDown={(e) => {if (e.keyCode == 13){e.target.blur();}}}
            onChange={(e) => this.handleChange(e, this.props.label.id)}
          />
        </div>

          <input
            className={style.addOneBit}
            name="bit"
            value={this.state.bit}
            onKeyDown={this.handleSubmit}
            onChange={this.handleChange}
            placeholder="|"
          />

        <div className={style.bitsList}>
          {listBits}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, {label}) => ({
  label: label,
  bits: getBitsByLabelId(state, label.id)
});

export default connect(mapStateToProps)(Container);
