import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ErrorMessage } from "../styles/common.styled";
import {
  Button,
  Container,
  Input,
  InputBox,
  Text,
} from "../styles/home.styled";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    if(!name) {
      setError(true);
    } else {
      router.push(`/EducationDetails?name=${name}`);
    }
  };

  return (
    <Container>
      Hi there ! Welcome to your education showcase
      <Text>Type your name and click Enter below to begin!</Text>
      <InputBox>
        <Input
          onChange={handleInputChange}
          value={name}
          placeholder="Your Name"
        />
        {!name && error && <ErrorMessage>Please enter a name</ErrorMessage>}
      </InputBox>
      <br></br>
      <div>
        <Button onClick={handleClick}>Enter</Button>
      </div>
    </Container>
  );
};

export default Home;
