import styled from "styled-components";

export const SearchInputContainer = styled.div`
  position: relative;
`;

export const SuggestionContainer = styled.div`
  display: block;
  border: 1px solid #aaa;
  z-index: 2;
  height: 150px;
  position: absolute;
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