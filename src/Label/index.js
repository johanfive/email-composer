import React from 'react';
import NewBitInput from '../NewBitInput/';
import LabelTitle from '../LabelTitle/';
import ListBits from '../ListBits/';
import Close from '../Close/';
//______________________________________________________________________________


// Could easily be a basic function instead of a class,
// but it would rerender everytime the ListLabels updates.
// ===> PureComponent
class Label extends React.PureComponent {
    render() {
        const {id} = this.props;
        return (
            <div>
                <LabelTitle id={id} />
                <Close labelId={id} />
                <NewBitInput labelId={id} />
                <ListBits id={id} />
            </div>
        );
    }
}

export default Label;
