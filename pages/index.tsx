import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import SearchInput from "../components/SearchInput";
import { getApiSuggestions } from "../services/service";
import { Button, Container, Text } from "../styles/styled.home";

const Home: NextPage = () => {
  const [options, setOptions] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const [name, setname] = useState("");

  const getSuggestions = async (word: string) => {
    if (word) {
      setLoading(true);
      const response = await getApiSuggestions(word);
      setOptions(response);
      setLoading(false);
    } else {
      setOptions([]);
    }
  };

  const getApiUrl = (url: any) => {
    setname(url.name);
    setOptions([]);
  };
  return (
    <Container>
      Hi there ! Welcome to your education showcase
      <Text>Type your name and click Enter below to begin!</Text>
      <SearchInput
        loading={loading}
        options={options}
        requests={getSuggestions}
        onClickFunction={getApiUrl}
        name={name}
        placeholder="Your name"
      />
      <br></br>
      <Link href={`/EducationDetails?name=${name}`}>
        <Button>Enter</Button>
      </Link>
    </Container>
  );
};

export default Home;
