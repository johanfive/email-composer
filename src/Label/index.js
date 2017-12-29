import React from 'react';
import NewBitInput from '../NewBitInput/';
import LabelTitle from '../LabelTitle/';
import ListBits from '../ListBits/';
import Close from '../Close/';
import Wrapper from './styledWrapper';
//______________________________________________________________________________



// Could easily be a basic function instead of a class,
// but it would rerender everytime the ListLabels updates.
// ===> PureComponent
class Label extends React.PureComponent {
    render() {
        const {id} = this.props;
        return (
            <Wrapper>
                <Close labelId={id} />
                <LabelTitle id={id} />
                <NewBitInput labelId={id} />
                <ListBits id={id} />
            </Wrapper>
        );
    }
}

export default Label;
