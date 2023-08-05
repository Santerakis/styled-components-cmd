import React from 'react';
import styled, {css, keyframes} from "styled-components";

const rotateAnimation = keyframes` 
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const StButton = styled.button.attrs(props => ({
    outlined: true,
}))`
  // дефолтные пропсы через attrs
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  background: grey;
  &:focus {
    outline: none;
  }
  // &:hover {
  //   animation: ${rotateAnimation} 1s infinite linear;
  // }
  align-self: ${props => props.align || 'stretch'};
  
  ${props => props.primary && css`
    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'blue'};
  `}
  ${props => props.outlined && css`
    color: ${props => props.color || 'white'};
    background: transparent;
    border: 1px solid ${props => props.color || 'white'};
  `}
`
const StLargeButton = styled(StButton)`
    font-size: 32px
`

const Button = (props) => {
    return (
        <StButton {...props}>Отправить</StButton>
    );
};

export default Button;