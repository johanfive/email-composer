import React from 'react';
import { connect } from 'react-redux';
import { updateEditor } from './actions';
//______________________________________________________________________________


// C O M P O N E N T
const EditorButton = ({cmd, onClick, children}) =>(
    <button onClick={() => onClick(cmd)}>
        {children}
    </button>
);


// C O N T A I N E R
const mapDispatchToProps = (dispatch) => ({
    onClick: (cmd) => dispatch(updateEditor(cmd))
});

export default connect(null, mapDispatchToProps)(EditorButton);
