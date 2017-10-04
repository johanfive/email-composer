import React from 'react';
// import all actions as action for readability
import * as fbAction from '../actions/fbActions';
import style from '../styling/button.css';


class Close extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (this.props.labelId) {
            fbAction.deleteLabel(e.target.value);
        }
        if (this.props.bitId) {
            fbAction.deleteBit(e.target.value);
        }
    }

    render() {
        return (
            <button
                className={style.close}
                onClick={this.handleClick}
                value={this.props.bitId || this.props.labelId}
            >
                &#9587;
            </button>
        );
    }
}

export default Close;

/*
&#4030; (tibetan ku ru kha = X)
&#5741; narrow / vertical
&#5742;
&#8904; sideway sablier
&#9587; huge thin X
&#9747;
&#10539; upward bar clearly above the downard bar
&#10754; x inside O
&#10761;
&#10799; little bold multiplication bottom of line height
*/
