import styled, { css } from 'styled-components';
//______________________________________________________________________________


const Button = styled.div`
    float: right;
    cursor: pointer;
    display: table;
    margin: 5px 7px 0 .2em;
    color: hsla(360, 0%, 45%, 1);
    &:hover {
        font-weight: bold;
        color: white;
    }
    span {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    ${props => props.bit && css`
        position: relative;
        top: -9px;
        right: -11px;
        font-size: .8em;
        color: hsla(360, 0%, 45%, 1);
    `}
`;


export default Button;
