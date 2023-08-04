import React from 'react';
import styled, {css} from "styled-components";


const StButton = styled.button`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  align-self: ${props => props.align || 'stretch'};
  
  ${props => props.primary && css`
  color: ${props => props.color || 'white'};
  background: ${props => props.background || 'red'};
  `}
`

const Button = (props) => {
    return (
        <StButton {...props}>Отправить</StButton>
    );
};

export default Button;