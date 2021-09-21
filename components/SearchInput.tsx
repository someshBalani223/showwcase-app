import debounce from "lodash/debounce";
import React, { useState } from "react";

import { University } from "../interfaces";
import { Input } from "../styles/common.styled";
import {
  Loading,
  SearchInputContainer,
  SuggestionContainer,
  SuggestionOption,
} from "../styles/searchInput.styled";

interface Props {
  loading: boolean;
  options: University[];
  onSelection: (selected: string) => void;
  onChange: (text: string) => void;
  placeholder: string;
}

const SearchInput: React.FC<Props> = ({
  loading,
  options,
  onSelection,
  onChange,
  placeholder,
}) => {
  const [value, setInputValue] = useState("");

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    onChange(value);
  };

  const optionSelected = (name: string) => {
    setInputValue(name);
    onSelection(name);
  };

  return (
    <>
      <Input value={value} onChange={updateValue} placeholder={placeholder} />
      {loading && <Loading>Loading...</Loading>}
      {options.length > 0 && !loading && (
        <SuggestionContainer>
          {options.map((university: University, index) => (
            <SuggestionOption
              key={`${university.name}-${university.country}-${index}`}
              onClick={() => optionSelected(university.name)}
            >
              {university.name}
            </SuggestionOption>
          ))}
        </SuggestionContainer>
      )}
    </>
  );
};

export default SearchInput;
