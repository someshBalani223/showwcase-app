/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import ModalComponent from "../components/ModalComponent";
import ShowCaseContainer from "../components/ShowCaseContainer";
import ShowCasePanel from "../components/ShowCasePanel";
import { Container, Text } from "../styles/educationdetails.styled";

const EducationDetails: React.FC = () => {
  const [click, setClick] = useState(false);
  const [state, setState] = useState({});
  const [universityData, setUniversityData] = useState([]);
  const [data, setData] = useState<any[]>([]);
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const isOpen = () => {
    setClick(true);
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    setData([...data, state]);
    localStorage.setItem("educationData", JSON.stringify([...universityData, state]));
    setClick(false);
  };

  const router = useRouter();
  useEffect(() => {
    if (localStorage) {
      setUniversityData(JSON.parse(localStorage.getItem("educationData") || '[]'));
    }
  }, [data]);

  return (
    <div>
      <Container>
        <Text>{`Welcome to ${router.query.name}'s education page.`}</Text>
        <ModalComponent
          click={click}
          data={data}
          handleChange={handleChange}
          isOpen={isOpen}
          handleClick={handleClick}
        />
      </Container>
      <ShowCasePanel universityData={universityData} />
      <ShowCaseContainer universityData={universityData} />
    </div>
  );
};

export default EducationDetails;
