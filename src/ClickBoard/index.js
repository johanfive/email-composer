import React from 'react';
import styled from 'styled-components';
//______________________________________________________________________________


const Wrapper = styled.div`
    position: fixed;
    top: 25%;
    left:0;
    width: 100%;
    height: 75%;
    overflow: auto;
    background: #181818;
    @media only screen and (min-width: 850px) {
        top:0;
        width: 67%;
        height: 100%;
    }
`;


const ClickBoard = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default ClickBoard;
