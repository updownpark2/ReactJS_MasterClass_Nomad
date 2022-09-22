import styled, { keyframes } from "styled-components";

const Emoji = styled.span`
  font-size: 30px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: tomato;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

const Wrraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrraper>
      <Title>Hello!</Title>
    </Wrraper>
  );
}

export default App;
