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
  color: ${({color}) => color || 'white'};
  &:focus {
    outline: none;
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