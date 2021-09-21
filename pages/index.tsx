import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button, Container, Input, InputBox, Text } from "../styles/home.styled";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  
  useEffect(() => {
    localStorage.clear();
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

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
      </InputBox>
      <br></br>
      <Link href={`/EducationDetails?name=${name}`} passHref={true}>
        <Button>Enter</Button>
      </Link>
    </Container>
  );
};

export default Home;
