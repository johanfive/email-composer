import styled from 'styled-components';
//______________________________________________________________________________


const Wrapper = styled.div`
    position: fixed;
    bottom: 0.3125em;
    right: 0.3125em;
    z-index: 888;

    button {
    color: white;
    text-shadow: -.5px -.5px 0 black;
    background: #B9314F;
    padding: .5em;
    z-index: 999;
    cursor: pointer;
    }
    button:hover { background: hsla(335, 75%, 45%, 1); }

    @media only screen and (min-width: 850px) {
        bottom: auto;
        right: auto;
        top: .8em;
        left: .8em;
    }
`;

export default Wrapper;
