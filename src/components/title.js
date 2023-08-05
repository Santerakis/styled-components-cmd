import React from 'react';
import styled from "styled-components";

const StTitle = styled.h1`
//color: white;
  color: ${props => props.color};
`

const Title = (props) => {
    return (
        <StTitle {...props}/>
        // <StTitle {...{children: 'ASD', color: 'green'}}/>
    );
};


export default Title;