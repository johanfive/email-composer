import styled from 'styled-components';
//______________________________________________________________________________


const Wrapper = styled.div`
    font-family: 'Open Sans', sans-serif;
    column-gap: 2em;
    margin: 1.8em;
    @media only screen and (min-width: 600px) {
        column-count: 2;
    }
    @media only screen and (min-width: 1200px) {
        column-count: 3;
    }
`;


export default Wrapper;
