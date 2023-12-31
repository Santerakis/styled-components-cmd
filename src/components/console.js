import React, {useState} from 'react';
import styled from "styled-components";
import Flex from "./flex";
import Line from "./line";

const StConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${props => props.color || props.theme.colors.primary};
  &:focus {
    outline: none;
  }
  @media ${props => props.theme.media.phone} {
    border: 1px solid red;
  }
  @media ${props => props.theme.media.tablet} {
    border: 1px solid green;
  }
`

const Console = ({color, ...rest}) => {
    const [lines, setLines] = useState(['C/users/sergey>'])

    const OnKeyPress = e => {
        if(e.charCode === 13) {
            setLines([...lines, 'C/users/sergey>'])
        }
    }

    return (
        <Flex>
            <Flex direction={'column'} margin={'0 10px'}>
                {lines.map(l =>
                    <Line color={color}>{l}</Line>
                )}
            </Flex>
            <StConsole onKeyPress={OnKeyPress} color={color} {...rest}/>
        </Flex>
    );
};

export default Console;