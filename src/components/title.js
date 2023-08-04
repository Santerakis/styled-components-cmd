import React from 'react';
import styled from "styled-components";

const StTitle = styled.h1`
//color: white;
  color: ${props => props.color};
`

const Title = ({children, color}) => {
    return (
        <StTitle color={color}>
            {children}
        </StTitle>
    );
};

export default Title;