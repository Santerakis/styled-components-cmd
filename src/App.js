import styled from "styled-components";
import Title from "./components/title";

const StAppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`


function App() {
  return (
    <StAppWrapper >
      <Title color={'white'}>CMD</Title>
    </StAppWrapper>
  );
}

export default App;
