import _, { debounce } from "lodash";
import React, { useCallback, useState } from "react";

import { Input, Loading,Suggestion } from "../styles/styled.searchinput";

interface Props {
  loading: boolean;
  name: string;
  options: [];
  requests: any;
  onClickFunction: (url: string) => void;
  placeholder: string;
}
const SearchInput = ({
  loading,
  options,
  requests,
  onClickFunction,
  placeholder,
  name,
}: Props): any => {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce((value) => requests(value), 1000),
    []
  );

  const updateValue = (value: any) => {
    setInputValue(value);
    debouncedSave(value);
    onClickFunction(value);
  };

  return (
    <div>
      <Input
        value={name}
        onChange={(e) => updateValue(e.target.value)}
        placeholder={placeholder}
      />

      {loading && <Loading>Loading...</Loading>}
      {options.length > 0 &&
        !loading &&
        options.map((value: any, index: any) => (
          <Suggestion
            key={`${value.name}-${index}`}
            onClick={() => onClickFunction(value)}
          >
            {value.name}
          </Suggestion>
        ))}
    </div>
  );
};

export default SearchInput;
