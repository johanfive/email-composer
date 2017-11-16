import React from 'react';
import { createNewBit } from './firebaseActions';
//______________________________________________________________________________


export default class NewBitInput extends React.PureComponent {
    constructor() {
        super();
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit(e) {
        // if key pressed is Enter/Return
        if (e.keyCode === 13) {
          const {text} = this.state;
             //regex.test to make sure the input starts with a non-whitespace character
            // prevents empty Bits
            if (/^\S+/.test(text)) {
                createNewBit(text, this.props.labelId);
            }
            this.setState({text: ''});
            // e.target.blur();
        }
    }
    render() {
        return (
            <input
                value={this.state.text}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}
