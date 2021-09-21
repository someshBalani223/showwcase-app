import styled from "styled-components";

export const SearchInputContainer = styled.div`
  position: relative;
`;

export const SuggestionContainer = styled.div`
  display: flex;
  border: 1px solid #aaa;
  z-index: 2;
  flex-direction: column;
  height: 150px;
  position: absolute;
  margin-top: 83px;
  width: 22%;
  background-color: #fff;
  overflow-y: auto;
`;

export const SuggestionOption = styled.div`
  display: block;
  border: 1px solid #aaa;
  background-color: #fff,
  font-size: 85px;
  borderBottomLeftRadius: 4;
  borderBottomRightRadius: 4;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background-color: grey;
  }
`;

export const Loading = styled.div`
  font-size: 15px;
`;
