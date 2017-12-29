import React from 'react';
import { connect } from 'react-redux';
import { getBitText } from '../selectors';
import { updateEditor } from './actions';
import Close from '../Close/';
import Wrapper from './styledWrapper';
//______________________________________________________________________________



// C O M P O N E N T
const Bit = ({id, text, onClick}) => (
    <Wrapper onClick={() => onClick(text)}>
        <Close bitId={id} />
        {text}
    </Wrapper>
);


// C O N T A I N E R
const mapStateToProps = (state, {id}) => ({
    text: getBitText(state, id),
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (text) => dispatch(updateEditor(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bit);
