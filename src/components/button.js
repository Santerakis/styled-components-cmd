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
        <StLargeButton {...props}>Отправить</StLargeButton>
    );
};

export default Button;