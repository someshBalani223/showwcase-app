import styled from "styled-components";

export const Input = styled.input`
  width: 27%;
  height: 40px;
  box-shadow: 1px 2px;
`;
export const Suggestion = styled.div`
    display: block;
    border: 1px solid #aaa;
    background-color: #fff,
    font-size: 85px;
    borderBottomLeftRadius: 4;
    borderBottomRightRadius: 4;
    z-index: 2;
    width: 27%;
    margin-left: 36%;
    cursor: pointer;
    font-size: 15px;
    &:hover {
        background-color: grey;
      }
`;

export const Loading = styled.div`
    font-size: 15px;
`;