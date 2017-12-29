import styled from 'styled-components';
//______________________________________________________________________________


const Input = styled.input`
    width: 100%;
    padding: .5em;
    margin-bottom: .5em;
    border-top: 1px solid hsla(360, 0%, 35%, 1);
    border-bottom: 1px solid hsla(360, 0%, 35%, 1);
    color: hsla(360, 0%, 45%, 1);
    font-size: .8em;
    &:hover, &:focus {
        background: hsla(360, 0%, 8%, 1);
    }
`;

export default Input;
