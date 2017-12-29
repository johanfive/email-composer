import styled from 'styled-components';
//______________________________________________________________________________


const Wrapper = styled.div`
    z-index: -999;
    position: fixed;
    bottom: 1.5em;
    left: 0;
    right: 0;
    font-family: 'Monoton';
    font-size: 2em;
    color: #181818;
    text-align: center;
    letter-spacing: .5em;

    span:nth-child(4n+1) {
        text-shadow: 1px 1px 0px hsla(185, 75%, 45%, 1);
    }
    span:nth-child(4n+2) {
        text-shadow: 1px 1px 0px hsla(045, 65%, 50%, 1);
    }
    span:nth-child(4n+3) {
        text-shadow: 1px 1px 0px hsla(020, 75%, 55%, 1);
    }
    span:nth-child(4n+4) {
        text-shadow: 1px 1px 0px hsla(335, 65%, 50%, 1);
    }
    span::selection {
        background: 0;
        text-shadow: 3px 3px 0px #888;
    }

    @media only screen and (min-width: 600px) {
        font-size: 3em;
        bottom: .3em;
    }

    @media only screen and (min-width: 850px) {
        position: static;
        margin: .8em 0 .8em 0;
        font-size: 3.5em;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 5em;
    }
`;

export default Wrapper;
