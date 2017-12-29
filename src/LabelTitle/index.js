import React from 'react';
import { connect } from 'react-redux';
import { getLabelTitle } from '../selectors';
import { watchTitleChanges } from './firebaseWatchers';
import { updateTitle } from './firebaseActions';
import Input from './styledWrapper';
//______________________________________________________________________________



// C O M P O N E N T
class LabelTitle extends React.Component {
    componentDidMount() {
        this.props.startListening(this.props.id);
    }
    render() {
        const {id, title, handleChange} = this.props;
        return (
            <Input
                value={title}
                onChange={(e) => handleChange(id, e)}
                onClick={(e) => e.target.select()}
            />
        );
    }
};


// C O N T A I N E R
const mapStateToProps = (state, {id}) => ({
    title: getLabelTitle(state, id)
});

const mapDispatchToProps = (dispatch) => ({
    startListening: (id) => watchTitleChanges(dispatch, id),
    handleChange: (id, e) => updateTitle(id, e.target.value)
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelTitle);
