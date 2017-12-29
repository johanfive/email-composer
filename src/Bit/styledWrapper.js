import styled from 'styled-components';
//______________________________________________________________________________



const Wrapper = styled.div`
    display: inline-block;
    margin-right: 1.2em;
    margin-bottom: 1.2em;
    padding: 11px;
    font-size: .8em;
    line-height: 1.5;
    word-break: break-word;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid hsla(360, 0%, 40%, 1);
    color: hsla(360, 0%, 85%, 1);

     &:hover {
        border: 1px solid hsla(360, 0%, 50%, 1);
        color: hsla(360, 0%, 95%, 1);
    }
`;

export default Wrapper;
