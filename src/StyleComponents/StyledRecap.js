import styled, { keyframes } from "styled-components";
export default function StyledRecap() {
  const YellowBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.theme.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.bgcolor};
  `;
  const GreenBox = styled(YellowBox)`
    background-color: green;
    border-radius: 20px;
  `;
  const TomatoButton = styled.button`
    background-color: tomato;
    border: 0;
    width: 70px;
    height: 30px;
    &:hover {
      color: red;
      background-color: white;
    }
  `;
  const Input = styled.input.attrs({ placeholder: "test" })`
    background-color: whitesmoke;
    border: 0;
    margin-left: 30px;
  `;

  const ani = keyframes`
from{
color: green;
}
to{
color: yellow;
}`;

  const AniBox = styled.div`
    animation: ${ani} 3s infinite;
  `;

  return (
    <div>
      <YellowBox bgcolor="green">
        <h3>FirstBox</h3>
      </YellowBox>
      <GreenBox bgcolor="yellow">
        <h3>SecondBox</h3>
      </GreenBox>
      <TomatoButton>Click</TomatoButton>
      <TomatoButton as="a" href="http://www.naver.com">
        Just H4!
      </TomatoButton>
      <div>
        <Input></Input>
        <Input></Input>
        <Input></Input>
      </div>
    </div>
  );
}
