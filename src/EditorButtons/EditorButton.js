import React from 'react';
import { connect } from 'react-redux';
import { updateEditor } from './actions';
import styled from 'styled-components';
//______________________________________________________________________________


const Button = styled.button`
    float: left;
    width: 25%;
    height: 100%;
    border-right: 1px solid black;
`;

// C O M P O N E N T
const EditorButton = ({cmd, onClick, children}) =>(
    <Button onClick={() => onClick(cmd)}>
        {children}
    </Button>
);


// C O N T A I N E R
const mapDispatchToProps = (dispatch) => ({
    onClick: (cmd) => dispatch(updateEditor(cmd))
});

export default connect(null, mapDispatchToProps)(EditorButton);
