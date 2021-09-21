import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  font-size: 25px;
  text-align: center;
  margin-top: 11%;
`;

export const Text = styled.p`
  margin-top: 8%;
`;

export const Button = styled.button`
  background-color: grey;
  border: none;
  color: black;
  padding: 15px 32px;
  display: inline-block;
  font-size: 16px;
  margin: 30px 2px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 27%;
  height: 40px;
  box-shadow: 1px 2px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputBox = styled.div`
  align-items: center;
  justify-content: center;
`;
