import React from 'react';
import { connect } from 'react-redux';
import { getBitsIdsByLabel } from '../selectors';
import { watchBitsEvents } from './firebaseWatchers';
import Bit from '../Bit/';
//______________________________________________________________________________


// C O M P O N E N T
class ListBits extends React.Component {
    componentWillMount() {
        this.props.startListening(this.props.id);
    }
    render() {
        const {bits} = this.props;
        const listTheBits = bits.map(id => <Bit key={id} id={id} />);
        return <div>{listTheBits}</div>;
    }
}


// C O N T A I N E R
const mapStateToProps = (state, {id}) => ({
    bits: getBitsIdsByLabel(state, id)
});

const mapDispatchToProps = (dispatch) => ({
    startListening: (id) => watchBitsEvents(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListBits);
