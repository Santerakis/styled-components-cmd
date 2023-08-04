import React from 'react';
import styled from "styled-components";

const StConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${({color}) => color || 'white'};
  &:focus {
    outline: none;
  }
`

const Console = (props) => {
    return (
        <StConsole {...props}/>
    );
};

export default Console;