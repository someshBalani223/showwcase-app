import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "../styles/searchInput.styled";

import { Button, Container, Text } from "../styles/home.styled";

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
      <Input
        onChange={handleInputChange}
        value={name}
        placeholder="Your Name"
      />
      <br></br>
      <Link href={`/EducationDetails?name=${name}`}>
        <Button>Enter</Button>
      </Link>
    </Container>
  );
};

export default Home;
