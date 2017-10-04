// import dependencies
import React from 'react';
// import all actions as action for readability
import * as fbAction from '../actions/fbActions'; // addBit action
// import child Component
import AddBit from './AddBit';
/*************************************/


export default class AddBitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit(e) {
        // if key pressed is Enter/Return
        if (e.keyCode == 13) {
          let {text} = this.state;
             //regex.test to make sure the input starts with a non-whitespace character
            // prevents empty Bits
            if (/^\S+/.test(text)) {
                fbAction.addBit(text, this.props.labelId);
            }
            this.setState({text: ''});
            // e.target.blur();
        }
    }
    render() {
        return (
            <AddBit
                text={this.state.text}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}
