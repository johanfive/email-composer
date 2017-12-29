import styled from 'styled-components';
//______________________________________________________________________________


const Button = styled.button`
    position: relative;
    top:0;
    left:0;
    margin: 0 0 0 45%;
    width: 32px;
    height: 32px;
    border: 1px solid hsla(25, 75%, 55%, 1);
    border-radius:16px;
    cursor:pointer;

    &:after {
        position: absolute;
        top:14.7px;
        left: 7px;
        content: "";
        width: 16px;
        height: 1px;
        background-color: hsla(25, 75%, 55%, 1);
        border-radius: 0;
    }

    &:before {
        position: absolute;
        top:7px;
        left: 15px;
        content:"";
        width: 1px;
        height: 16px;
        background-color: hsla(25, 75%, 55%, 1);
        border-radius: 2px;
    }

`;


export default Button;
