import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

import AddEducationModalForm from "../components/AddEducationModalForm";
import { Education } from "../interfaces";
import { EducationButton } from "../styles/addEducationModalForm.styled";
import {
  BoxContainer,
  Container,
  H5,
  SidePanel,
  Text,
} from "../styles/common.styled";
import { getCurrentDate, getMonthAndYear, getSortData } from "../utils";

const EducationDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [educations, setEducations] = useState<Education[]>([]);

  const showAddEducationModalForm = () => {
    setIsOpen(true);
  };

  const addNewEducation = (education: Education) => {
    setEducations([
      ...educations,
      {
        ...education,
        id: Date.now().toString(),
      },
    ]);
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const router = useRouter();
  const sortedData = useMemo(() => {
    return getSortData(educations);
  }, [educations]);

  return (
    <div>
      <Container>
        <Text>{`Welcome to ${router.query.name}'s education page.`}</Text>
        <EducationButton onClick={showAddEducationModalForm}>
          Add new education
        </EducationButton>
        {isOpen && (
          <AddEducationModalForm
            onSubmit={addNewEducation}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        )}
      </Container>
      <SidePanel>
        <H5>Showcase University</H5>
        <ul>
          {sortedData.map((education) => (
            <li key={education.id}>{education.schoolName}</li>
          ))}
        </ul>
      </SidePanel>
      <BoxContainer>
        <>
          {sortedData.map((education) => (
            <React.Fragment key={education.id}>
              <h4>{`${education.schoolName} @ ShowCase University`}</h4>
              <div>{`${getMonthAndYear(education.startYear)} - ${getCurrentDate(
                education.endYear
              )}`}</div>
              <ul>
                <li>{education.description}</li>
              </ul>
            </React.Fragment>
          ))}
        </>
      </BoxContainer>
    </div>
  );
};

export default EducationDetails;
