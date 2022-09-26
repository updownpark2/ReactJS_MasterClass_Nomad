import styled, { keyframes } from "styled-components";

const Box = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Sumarry = styled(Title)`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100px;
  height: 100px;
  background-color: whitesmoke;
  border-radius: 30px;
  &:hover {
    background-color: green;
  }
`;

const Ment = styled.h3`
  color: grey;
  font-size: 7px;
  &:hover {
    color: red;
  }
`;

export default function ThemeTraining() {
  return (
    <Box>
      <div>
        <Title>Hello!</Title>
      </div>
      <Sumarry>
        <Ment>대충 긴 글..</Ment>
      </Sumarry>
    </Box>
  );
}
