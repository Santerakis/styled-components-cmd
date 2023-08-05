import React from 'react';
import styled from "styled-components";

const StLine = styled.div`
  font-size: 24px;
  color: ${props => props.color || 'white'}
`

const Line = (props) => {
    return (
      <StLine {...props}/>
    );
};

export default Line;