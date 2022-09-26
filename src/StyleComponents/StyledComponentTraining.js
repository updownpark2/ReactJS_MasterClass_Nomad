import styled from "styled-components";

const Div = styled.div`
  background-color: ${(props) => props.BackC};
  height: 100px;
  width: 100px;
  border-radius: 30px;
`;

const Btn = styled.button`
  background-color: ${(props) => props.BackC};
  height: 30px;
  width: 40px;
  border-radius: 10px;
  border: none;
`;
const BigBtn = styled(Btn)`
  margin-left: 30px;
`;
export default function StyledComponentTraining() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>연습!</h1>
        <Div BackC="red"></Div>
        <Div BackC="orange"></Div>
        <Div BackC="yellow"></Div>
      </div>
      <div>
        <Btn as="input" BackC="tomato"></Btn>
        <Btn BackC="whitesmoke"></Btn>
        <BigBtn></BigBtn>
      </div>
    </div>
  );
}
