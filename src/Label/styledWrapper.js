import styled from 'styled-components';
//______________________________________________________________________________


const Wrapper = styled.div`
    break-inside: avoid-column;
    margin-bottom: 2em;
    z-index: 555;
    border-radius: 8px;
    background: #181818;

    &:nth-child(4n+1) {
        border: 1px solid hsla(185, 50%, 50%, 1);
    }
    &:nth-child(4n+2) {
        border: 1px solid hsla(45, 75%, 55%, 1);
    }
    &:nth-child(4n+3) {
        border: 1px solid hsla(20, 70%, 55%, 1);
    }
    &:nth-child(4n+4) {
        border: 1px solid hsla(335, 55%, 55%, 1);
    }
`;


export default Wrapper;
