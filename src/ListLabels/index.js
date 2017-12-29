import React from 'react';
import { connect } from 'react-redux';
import { actionType } from '../constants';
import { getLabelsIds } from '../selectors';
import { watchLabelsEventsThen } from './firebaseWatchers';
import Label from '../Label/';
import NewLabelButton from '../NewLabelButton/';
import Wrapper from './styledWrapper';
//______________________________________________________________________________


// C O M P O N E N T
class ListLabels extends React.Component {
    componentWillMount() {
        this.props.startListening();
    }
    componentWillUnmount() {
        this.props.clearState();
    }
    render() {
        const {labelsIds} = this.props;
        const listTheLabels = labelsIds.map(
            id => <Label key={id} id={id} />
        );
        return <Wrapper>{listTheLabels}<NewLabelButton /></Wrapper>;
    }
}


// C O N T A I N E R
const mapStateToProps = state => ({
    labelsIds: getLabelsIds(state)
});

const mapDispatchToProps = dispatch => ({
    startListening: () => watchLabelsEventsThen(dispatch),
    clearState: () => dispatch({type: actionType.clearState})
});

export default connect(mapStateToProps, mapDispatchToProps)(ListLabels);
