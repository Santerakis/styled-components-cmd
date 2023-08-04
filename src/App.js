import styled from "styled-components";
import Title from "./components/title";
import Flex from "./components/flex";
import Console from "./components/console";
import Button from "./components/button";

const StAppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

function App() {
  return (
    <StAppWrapper >
        <Flex justify={'center'}>
            <Title color={'green'}>Console cmd 2023. Sergey</Title>
        </Flex>
        <Flex direction={'column'}>
            <Console/>
            <Button  align={'flex-end'}/>
        </Flex>

    </StAppWrapper>
  );
}

export default App;
